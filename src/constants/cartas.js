const imagens = [
  "eva.png",
  "pipi.png",
  "julia.png",
  "gigi.png",
  "gigi2.png",
  "mari.png",
  "flora.png",
  "nicolas.png",
  "davi.png",
  "catarina.png",
  "hugo.png",
  "giovana.png",
  "marina.png",
  "lara.png",
  "flor-de-lis.png",
  "gustavo.png",
  "joao.png",
];

const cartasUnicas = imagens.map((imagem, idDoPar) => ({ imagem, idDoPar }));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
  (props, id) => ({ ...props, id })
);
