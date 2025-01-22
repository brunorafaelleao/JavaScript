//Ex04
//Crie um objeto chamado venda com as propriedades cliente, produto e valor.
let venda = {
  cliente: "Chiara",
  produto: "Mamadeira",
  valor: 10,
};
//Adicione a propriedade data ao objeto.
venda.dataCompra = "13/01/2025";
console.log(venda);
//Remova a propriedade produto e imprima o objeto atualizado.
delete venda.produto;
console.log(venda);

// //ex03
// //Crie um objeto chamado produto com as propriedades nome, preco e quantidade.
// let produto = {
//   nome: "Televisão",
//   preco: "1500",
//   qtde: 10,
// };
// //Acesse e imprima o nome do produto.
// console.log("Esse produto é: "+produto.nome);
// //Modifique o preço do produto e imprima o objeto atualizado.
// produto.preco = 2000;
// console.log(produto);

// //ex02
// // Crie um array chamado clientes contendo três nomes de clientes.
// let clientes = ["Bruno", "Rafael", "Jordan"];
// //Adicione um quarto cliente ao array.
// clientes[3] = "Francisco";
// console.log(clientes);
// //Remova o último cliente e imprima o array atualizado.
// clientes.pop();
// console.log(clientes);

// //ex01
// //Crie um array chamado produtos contendo três nomes de produtos.
// let produtos = ["TV", "Celular", "HD"];
// //. Acesse e imprima o segundo produto
// console.log(produtos[1]);
// //Modifique o terceiro produto para "Notebook" e imprima o array atualizado.
// produtos[2] = "Notebook";
// console.log(produtos);
