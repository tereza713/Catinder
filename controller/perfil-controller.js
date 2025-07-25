import { pegarGatosAdotados } from "../model/model.js";
import { criarCardGato } from "../view/view.js";

const container = document.getElementById("gatos-adotados");

function atualizarAdocao(gato) {
  console.log(`Visualizando gato adotado: ${gato.nome}`);
}

const adotados = pegarGatosAdotados();

adotados.forEach(gato => {
  const card = criarCardGato(gato, atualizarAdocao);
  container.appendChild(card);
});
