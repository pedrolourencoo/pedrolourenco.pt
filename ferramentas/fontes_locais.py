"""
Passa as fontes (Manrope e JetBrains Mono) do Google Fonts para dentro do teu site.

Porquê: o site deixa de depender de servidores externos para o texto, o texto aparece
já na fonte final (sem "salto" quando a fonte chega), poupas 2 ligações a outros
domínios e deixas de enviar o IP dos visitantes à Google (bom para o RGPD).

Como usar (na pasta do projeto, ao lado de index.html e style.css):
    python fontes_locais.py

O que faz:
    1. Descarrega as fontes para assets/fonts/ (só os subconjuntos latin e latin-ext)
    2. Escreve os @font-face no TOPO do style.css (entre marcadores; podes voltar a
       correr o script que ele substitui o bloco em vez de duplicar)
    3. Mostra as linhas <link rel="preload"> para colares no <head>
"""
import os
import re
import sys
import urllib.request
from pathlib import Path

CSS_URL = os.environ.get(
    "FONTS_CSS_URL",
    "https://fonts.googleapis.com/css2?family=Manrope:wght@300..800"
    "&family=JetBrains+Mono:wght@400..700&display=swap",
)
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")  # pede woff2
SUBSETS = {"latin", "latin-ext"}
OUT_DIR = Path("assets/fonts")
STYLE = Path("style.css")
INICIO = "/* FONTES-LOCAIS-INICIO (gerado por fontes_locais.py) */"
FIM = "/* FONTES-LOCAIS-FIM */"


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read()


def slug(texto):
    return re.sub(r"[^a-z0-9]+", "-", texto.lower()).strip("-")


def campo(corpo, nome):
    m = re.search(rf"{nome}\s*:\s*([^;]+);", corpo)
    return m.group(1).strip() if m else None


css = get(CSS_URL).decode("utf-8")
blocos = re.findall(r"/\*\s*([\w-]+)\s*\*/\s*@font-face\s*\{(.*?)\}", css, re.S)
if not blocos:
    print("Não consegui ler o CSS do Google Fonts. Primeiros 500 caracteres:\n")
    sys.exit(css[:500])

OUT_DIR.mkdir(parents=True, exist_ok=True)
regras, preload = [], {}
for subconjunto, corpo in blocos:
    if subconjunto not in SUBSETS:
        continue
    familia = campo(corpo, "font-family").strip("'\"")
    estilo = campo(corpo, "font-style") or "normal"
    peso = campo(corpo, "font-weight") or "400"
    intervalo = campo(corpo, "unicode-range")
    m = re.search(r"url\((https?://[^)]+?\.woff2)\)", corpo)
    if not m:
        continue
    ficheiro = OUT_DIR / f"{slug(familia)}-{subconjunto}{'-italic' if estilo == 'italic' else ''}.woff2"
    dados = get(m.group(1))
    ficheiro.write_bytes(dados)
    print(f"{ficheiro.as_posix():45} {len(dados)/1024:6.1f} KB")
    regra = (f"@font-face{{font-family:'{familia}';font-style:{estilo};font-weight:{peso};"
             f"font-display:swap;src:url('{ficheiro.as_posix()}') format('woff2')")
    regra += f";unicode-range:{intervalo}}}" if intervalo else "}"
    regras.append(regra)
    if subconjunto == "latin" and estilo == "normal":
        preload[familia] = ficheiro.as_posix()

bloco = "\n".join([INICIO] + regras + [FIM]) + "\n"

if STYLE.exists():
    bruto = STYLE.read_bytes().decode("utf-8")
    crlf = "\r\n" in bruto
    texto = bruto.replace("\r\n", "\n")
    texto = re.sub(re.escape(INICIO) + r".*?" + re.escape(FIM) + r"\n?", "", texto, flags=re.S)
    texto = bloco + "\n" + texto.lstrip("\n")
    if crlf:
        texto = texto.replace("\n", "\r\n")
    STYLE.write_bytes(texto.encode("utf-8"))
    print(f"\n@font-face escritos no topo de {STYLE}")
else:
    Path("fontes-locais.css").write_text(bloco, encoding="utf-8")
    print("\nstyle.css não encontrado: gerei fontes-locais.css para colares tu.")

print("\nCola no <head> dos dois HTML (antes do link do style.css):")
for familia, caminho in preload.items():
    print(f'  <link rel="preload" href="{caminho}" as="font" type="font/woff2" crossorigin>')
print("\nE APAGA dos dois HTML as linhas do Google Fonts "
      "(2 preconnect, o link do css2 e o <noscript> correspondente).")
