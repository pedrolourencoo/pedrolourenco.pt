"""
Reduz as dimensões dos .webp para o tamanho que o site realmente mostra.
Corre na pasta do projeto (ao lado de index.html):
    pip install pillow
    python reduzir_imagens.py

Nota: os originais .jpg/.png já não existem na pasta; ficam no histórico do Git.
Como re-comprime um .webp, corre este script UMA vez só.
"""
from pathlib import Path
from PIL import Image

# ficheiro -> largura máxima (px)
LIMITES = {
    "assets/profile.webp": 1000,
    "assets/profile-photo.webp": 800,
    "assets/profile-photo-hover.webp": 800,
    "assets/projects/portfolio-mockup.webp": 1200,
}
QUALIDADE = 80

total_antes = total_depois = 0
for nome, largura_max in LIMITES.items():
    f = Path(nome)
    if not f.exists():
        print(f"(não encontrei {nome}, a saltar)")
        continue
    antes = f.stat().st_size
    with Image.open(f) as im:
        im.load()
        w0, h0 = im.size
        if w0 <= largura_max:
            print(f"{nome:42} já tem {w0}x{h0}, nada a fazer")
            continue
        h = round(h0 * largura_max / w0)
        im = im.resize((largura_max, h), Image.LANCZOS)
        im.save(f, "WEBP", quality=QUALIDADE, method=6)
    depois = f.stat().st_size
    total_antes += antes
    total_depois += depois
    print(f"{nome:42} {w0}x{h0} -> {largura_max}x{h}   {antes/1024:5.0f} KB -> {depois/1024:5.0f} KB")

if total_antes:
    print(f"\nTotal: {total_antes/1024:.0f} KB -> {total_depois/1024:.0f} KB")
