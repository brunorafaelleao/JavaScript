// console.log("----Resolução da exercício 01----");
// function media(n1, n2, n3) {
//   const calculo = (n1 + n2 + n3) / 3;
//   console.log("A média desse aluno é: " + calculo);
// }
// media(3, 5, 1);

// console.log("\n----Resolução da exercício 02----");
// function mediafinal(n1, n2, n3, n4) {
//   const media1 = (n1 + n2 + n3) / 3;
//   const media2 = (media1 + n4) / 2;
//   console.log("A média final desse aluno é: " + media2);
// }
// //mediafinal(3, 5, 1, 7);
// let n1 = 3;
// n2 = 5;
// n3 = 1;
// n4 = 7;
// mediafinal(n1, n2, n3, n4);

// console.log("\n----Resolução da exercício 03----");
// function tempFarenheit(valor) {
//   const tempF = 1.8 * valor + 32;
//   console.log(`A temperatura correspondente em Farenheit é de ${tempF}°F`);
// }
// let tempCelsius = 35;
// tempFarenheit(tempCelsius);

console.log("\n----Resolução da exercício 04----");
function valorfinal(valorinicial) {
  const valorimposto = (8.875 / 100) * valorinicial;
  const valorfinal = valorinicial + valorimposto;
  console.log(`O valor a ser pago é R$ ${valorfinal}`);
  console.log(`Valor do imposto embutido nessa compra foi R$ ${valorimposto}`);
}

let valorinicial = 150;

valorfinal(valorinicial);
