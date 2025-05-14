const titulo = document.getElementsByTagName("h2");
console.log("Selecionando pela tag h2: ", titulo);

const paragrafosItens = document.getElementsByClassName("texto-lista");
console.log("Selecionando pela classe texto-lista: ", paragrafosItens);

const destacado = document.getElementById("destacado");
console.log("Selecionando pelo id destacado: ", destacado);

const destacadoSelector = document.querySelector("#destacado");
console.log(
  "Selecionando pelo id destacado com querySelector: ",
  destacadoSelector
);
