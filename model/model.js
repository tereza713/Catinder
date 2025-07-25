export const gatos = [
  {
    id: 1,
    nome: "Bolinha",
    raca: "Persa",
    idade: 2,
    adotado: false,
    imagem: "/img/gato1.jpg"
  },
  {
    id: 2,
    nome: "Estrela",
    raca: "Nao identificado",
    idade: 3,
    adotado: true,
    imagem: "/img/gato2.jpg"
  },
   {
    id: 3,
    nome: "Chumbo",
    raca: "Siamês",
    idade: 14,
    adotado: false,
    imagem: "/img/gato1.jpg"
  },
  {
    id: 4,
    nome: "Cerveja",
    raca: "Nao identificado",
    idade: 2,
    adotado: false,
    imagem: "/img/gato2.jpg"
  },
  {
    id: 5,
    nome: "Kibo",
    raca: "Maine Conn",
    idade: 4,
    adotado: true,
    imagem: "/img/gato1.jpg"
  },
  {
    id: 6,
    nome: "Savannah",
    raca: "Nao identificado",
    idade: 6,
    adotado: false,
    imagem: "/img/gato2.jpg"
  },
  {
    id: 7,
    nome: "Clier",
    raca: "Angorá",
    idade: 8,
    adotado: false,
    imagem: "/img/gato1.jpg"
  },
  {
    id: 8,
    nome: "Mimi",
    raca: "Nao identificado",
    idade: 9,
    adotado: false,
    imagem: "/img/gato2.jpg"
  },
  {
    id: 9,
    nome: "Lilly",
    raca: "Sphynx",
    idade: 1,
    adotado: false,
    imagem: "/img/gato1.jpg"
  },
  {
    id: 10,
    nome: "Lilith",
    raca: "Nao identificado",
    idade: 4,
    adotado: true,
    imagem: "/img/gato2.jpg"
  },
  {
    id: 11,
    nome: "Weber",
    raca: "Ragdoll",
    idade: 12,
    adotado: false,
    imagem: "/img/gato1.jpg"
  },
  {
    id: 12,
    nome: "Ugo",
    raca: "Ashera",
    idade: 3,
    adotado: false,
    imagem: "/img/gato2.jpg"
  },
];
export function pegarGatosAdotados() {
  return gatos.filter(gato => gato.adotado === true);
}