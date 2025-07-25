import { gatos } from "../model/model.js";
import { criarCardGato } from "../view/view.js";

const container = document.getElementById("gatos-container");

function atualizarAdocao(gato) {
  gato.adotado = true;
  console.log(`Gato ${gato.nome} adotado!`);
}

gatos.forEach(gato => {
  const card = criarCardGato(gato, atualizarAdocao);
  container.appendChild(card);
});



