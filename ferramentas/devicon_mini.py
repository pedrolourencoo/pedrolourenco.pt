"""
Cria uma versão mini do Devicon só com os ícones que o teu site usa.
Em vez de ~777 KB (devicon.ttf), fica com poucos KB.

Como usar (na pasta do projeto, ao lado de index.html):
    pip install fonttools brotli
    python devicon_mini.py

Gera:
    devicon-mini.css
    assets/fonts/devicon-mini.woff2
"""
import io
import os
import re
import sys
import urllib.request
from pathlib import Path
from urllib.parse import urljoin

from fontTools import subset
from fontTools.ttLib import TTFont

VERSION = "2.17.0"   # mesma versão que fixaste no HTML
BASE = os.environ.get("DEVICON_BASE", f"https://cdn.jsdelivr.net/npm/devicon@{VERSION}/")
HTML_FILES = ["index.html", "personalportfolio.html"]
OUT_DIR = Path("assets/fonts")
OUT_CSS = Path("devicon-mini.css")


def download(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read()


# 1) Que ícones é que o site usa?
usadas = set()
for nome in HTML_FILES:
    f = Path(nome)
    if f.exists():
        html = f.read_text(encoding="utf-8")
        for atributo in re.findall(r'class\s*=\s*["\']([^"\']*)["\']', html):
            usadas |= {c for c in atributo.split() if c.startswith("devicon-")}
usadas.discard("devicon-mini")
if not usadas:
    sys.exit("Não encontrei classes devicon-* nos HTML. Corre o script na pasta do projeto.")
print("Ícones usados:", ", ".join(sorted(usadas)))

# 2) CSS original -> código de cada ícone
css_url = urljoin(BASE, "devicon.min.css")
css = download(css_url).decode("utf-8")

codigos = {}
regra_base = ""
for seletor, corpo in re.findall(r"([^{}]+)\{([^{}]*)\}", css):
    m = re.search(r'content\s*:\s*(["\'])(\\[0-9a-fA-F]{1,6}|[^"\'\\])\s*\1', corpo)
    if m:
        valor = m.group(2)
        codigo = int(valor[1:], 16) if valor.startswith("\\") else ord(valor)
        for sel in seletor.split(","):
            mm = re.match(r"\s*\.(devicon-[a-z0-9-]+)::?before\s*$", sel)
            if mm:
                codigos[mm.group(1)] = codigo
    elif "devicon" in seletor and ("[class" in seletor) and "font-family" in corpo:
        regra_base = f"{seletor.strip()}{{{corpo.strip()}}}"

if not codigos:
    print("\nNão consegui ler nenhum ícone do CSS. Primeiros 600 caracteres:\n")
    print(css[:600])
    sys.exit("\nManda-me este texto para eu ajustar o script.")
em_falta = sorted(usadas - set(codigos))
if em_falta:
    sys.exit(f"Estes ícones não existem na versão {VERSION}: {', '.join(em_falta)}")
if not regra_base:
    regra_base = ('[class^="devicon-"],[class*=" devicon-"]{font-family:"devicon"!important;'
                  "speak:never;font-style:normal;font-weight:400;font-variant:normal;"
                  "text-transform:none;line-height:1;-webkit-font-smoothing:antialiased}")

# 3) Descarrega a fonte e corta tudo menos os ícones usados
m = re.search(r'url\(["\']?([^)"\']+?\.ttf[^)"\']*)', css)
if not m:
    sys.exit("Não encontrei o ficheiro .ttf no CSS do Devicon.")
ttf = download(urljoin(css_url, m.group(1)))
print(f"Fonte original: {len(ttf)/1024:.0f} KB")

opcoes = subset.Options()
opcoes.layout_features = []
opcoes.name_IDs = []
opcoes.notdef_outline = True
opcoes.glyph_names = False
fonte = TTFont(io.BytesIO(ttf))
sub = subset.Subsetter(opcoes)
sub.populate(unicodes=[codigos[c] for c in usadas])
sub.subset(fonte)

OUT_DIR.mkdir(parents=True, exist_ok=True)
formato, ext = "woff2", "woff2"
try:
    import brotli  # noqa: F401
    fonte.flavor = "woff2"
except ImportError:
    print("(brotli não instalado: a usar WOFF em vez de WOFF2 — faz 'pip install brotli' para ficar mais leve)")
    fonte.flavor = "woff"
    formato, ext = "woff", "woff"
destino = OUT_DIR / f"devicon-mini.{ext}"
fonte.save(destino)
print(f"Fonte mini: {destino.stat().st_size/1024:.1f} KB  ({destino.as_posix()})")

# 4) CSS mini
linhas = [
    "/* Gerado por devicon_mini.py — só os ícones usados no site */",
    "@font-face{font-family:'devicon';"
    f"src:url('{destino.as_posix()}') format('{formato}');"
    "font-weight:400;font-style:normal;font-display:swap}",
    regra_base,
]
for classe in sorted(usadas):
    linhas.append(f'.{classe}:before{{content:"\\{codigos[classe]:x}"}}')
OUT_CSS.write_text("\n".join(linhas) + "\n", encoding="utf-8")
print(f"CSS mini: {OUT_CSS}  ({len(usadas)} ícones)")
print('\nAgora troca, nos dois HTML, o link do devicon por:\n  <link rel="stylesheet" href="devicon-mini.css">')