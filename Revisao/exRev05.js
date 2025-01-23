/*Exercício 1: Dado o array ['Produto A', 'Produto B'], adicione 'Produto C' ao final,
remova o primeiro item e exiba o carrinho atualizado.
Exemplo de Saída: // ['Produto B', 'Produto C']
let produtos = ['Produto A', 'Produto B']
produtos.push('Produto C')
produtos.shift()
console.log(produtos)

*/

/*Exercício 2: Dado o array ['Produto X', 'Produto Y'], adicione 'Produto Z' ao final
e una com a nova lista ['Produto A', 'Produto B']. Exiba a lista final de produtos
disponíveis
Saída: ['Produto X', 'Produto Y', 'Produto Z', 'Produto A', 'Produto B']

let produtos1 = ["Produto A", "Produto B"];
let produtos2 = ["Produto X", "Produto Y"];
produtos2.push("Produto Z");
let produtos3 = produtos2.concat(produtos1);
console.log(produtos3);
*/

/*Exercício 3: Dado o array ['Caderno', 'Lápis', 'Estojo'], verifique se 'Lápis' e
'Agenda' estão presentes no estoque.
Exemplo de Saída: // true
// false

let lista = ["Caderno", "Lápis", "Estojo"];
console.log(lista.includes("Lápis"));
console.log(lista.includes("Agenda"));
console.log(lista.includes("Lápis") && lista.includes("Agenda"));

*/

/*Exercício 4: Dado o array [2, 5, 8, 1], verifique se pelo menos um dos números é maior
que 7.
Exemplo de Saída: // true

let numeros = [2, 5, 8, 1];
valida = numeros.some(num => num > 7);
console.log(valida);

*/

/*Exercício 5: Dado o array [4, 6, 8, 2], verifique se todos os números são maiores que 3.
Exemplo de Saída: // false

let numeros = [4, 6, 8, 2];
valida = numeros.every((num) => num > 3);
console.log(valida);


*/
