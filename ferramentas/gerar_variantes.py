"""
Gera versões mais pequenas das 4 imagens do site, para o browser escolher a
que melhor serve ao ecrã (telemóvel = ficheiro leve, ecrã grande = ficheiro grande).

Corre na pasta do projeto (ao lado de index.html):
    pip install pillow
    python gerar_variantes.py

Não mexe nas imagens atuais: cria ficheiros novos, por exemplo
assets/profile-560.webp, e mostra no fim os atributos srcset prontos a colar.
"""
from pathlib import Path
from PIL import Image

QUALIDADE = 80

# imagem original -> larguras das versões pequenas a criar
VARIANTES = {
    "assets/profile.webp": [560],
    "assets/profile-photo.webp": [400],
    "assets/profile-photo-hover.webp": [400],
    "assets/projects/portfolio-mockup.webp": [640],
}

for nome, larguras in VARIANTES.items():
    f = Path(nome)
    if not f.exists():
        print(f"(não encontrei {nome}, a saltar)")
        continue
    with Image.open(f) as im:
        im.load()
        w0, h0 = im.size
        partes = []
        for w in larguras:
            if w >= w0:
                continue
            h = round(h0 * w / w0)
            destino = f.with_name(f"{f.stem}-{w}.webp")
            im.resize((w, h), Image.LANCZOS).save(destino, "WEBP", quality=QUALIDADE, method=6)
            partes.append(f"{destino.as_posix()} {w}w")
            print(f"criado {destino.as_posix():46} {w}x{h}  {destino.stat().st_size/1024:5.0f} KB")
        partes.append(f"{f.as_posix()} {w0}w")
    print(f'   srcset="{", ".join(partes)}"\n')
