// mudar a cor do parágrafo

function mudarCor(elemento, cor) {
  elemento.style.color = cor;
}

function alertaBotao() {
  alert("Você clicou no botão com evento JS!");
}

function campoFoco(elemento) {
  elemento.placeholder = "Você está em foco!";
}

function campoSemFoco(elemento) {
  elemento.placeholder = "Digite aqui";
}

function trocarImagem(imagem, novoSrc) {
  imagem.src = novoSrc;
}
