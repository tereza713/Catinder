export function criarCardGato(gato, onAdotar) {
  const card = document.createElement("div");
  card.classList.add("card-gato");

  const img = document.createElement("img");
  img.src = gato.imagem;
  img.alt = `Foto do gato ${gato.nome}`;

  const nome = document.createElement("h2");
  nome.textContent = gato.nome;

  const raca = document.createElement("p");
  raca.textContent = `Raça: ${gato.raca}`;

  const idade = document.createElement("p");
  idade.textContent = `Idade: ${gato.idade} ano(s)`;

  const botaoAdotar = document.createElement("button");

  if (gato.adotado) {
    botaoAdotar.textContent = "Adotado";
    botaoAdotar.disabled = true;
  } else {
    botaoAdotar.textContent = "Adotar";
    botaoAdotar.disabled = false;
  }

  botaoAdotar.addEventListener("click", () => {
    botaoAdotar.textContent = "Adotado";
    botaoAdotar.disabled = true;
    if (onAdotar) {
      onAdotar(gato);
    }
  });

  card.append(img, nome, raca, idade, botaoAdotar);
  return card;
}
