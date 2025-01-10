// /*Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00. Além disso,
// há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do produto após aplicar o desconto e o imposto.*/
// let valProduto = 200.0;
// let valDesconto = 40.0;
// let valImposto = 12.0;
// let valFinalProduto = valProduto - valDesconto + valImposto;
// console.log(
//   `O valor oficial do produto escolhido é R$${valProduto}, descontando R$${valDesconto} e acrescentando o imposto de R$${valImposto}, o preço final é R$${valFinalProduto}`
// );
// console.log();
// /*Exercício 2: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional de R$ 30,00.
// Calcule o preço de venda do produto. Exemplo de Saída: // “Preço de venda do produto: R$ 130”*/
// let valProduto2 = 100.0;
// let precoLucro = 30.0;
// let precoFinal = valProduto2 + precoLucro;
// console.log(
//   `O valor incial do produto é R$${valProduto2} e vendendo para tirar um lucro de R$${precoLucro}, o preço final fica R$${precoFinal}`
// );
// console.log();
// /*Exercicio 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto é R$ 300,00.*/
// let orcamento = 250.0;
// let pdtInicial = 450;
// let pdtDesconto = 50;

// console.log("Valor inicial do produto = " + pdtInicial);
// console.log("Orçamento = " + orcamento);
// console.log("Valor do produto com desconto: " + (pdtInicial - pdtDesconto));
// if (orcamento >= pdtInicial - pdtDesconto) {
//   console.log("Sim, está dentro do orçamento");
// } else {
//   console.log("Não, está fora do orçamento");
// }
/*Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em um estoque como uma string ("20")
e outra que representa a quantidade mínima necessária de produtos no estoque como um número (20). Verifique se a quantidade atual
de produtos é suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um número. Imprima no console
se a quantidade é suficiente ou não. Exemplo de Saída: “A quantidade no estoque é suficiente: true”*/
// let qtdProdutos = "19";
// let qtdMinima = 20;
// let qtdProdutosNum = parseInt(qtdProdutos);
// console.log("Quantidade de produtos = " + qtdProdutosNum);
// console.log("Quantidade mínima = " + qtdMinima);
// if (qtdProdutosNum >= qtdMinima) {
//   console.log("A quantidade no estoque é suficiente: true");
// } else {
//   console.log("A quantidade no estoque é suficiente: false");
// }
/*Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível
como um booleano (true), outra que representa a quantidade de produtos no estoque (10), e
uma terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique se
o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade mínima necessária)
usando operadores lógicos NOT e AND. Imprima no console se o produto está disponível e tem a quantidade suficiente.
Exemplo de Saída: “'O produto está disponível e tem quantidade suficiente: false” e “'O produto está indisponível: false”*/
