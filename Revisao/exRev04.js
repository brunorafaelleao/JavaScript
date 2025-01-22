/*/ Exercício 1: Dada a string 'javascript é divertido', converta a palavra 'javascript' para letras
// maiúsculas.
// let texto = "javascript é divertido";
// console.log(texto.replace("javascript", "JAVASCRIPT"));
/*método replace foi usado porque ele substitui a primeira ocorrência da palavra javascript por JAVASCRIPT onde no seu
parâmetro é passado a palavra a ser substituída e a palavra que substituirá a palavra a ser substituída.*/

/*/ Exercício 2: Dada a string "Aprendendo Javascript", extraia a palavra "Aprendendo" e,
// em seguida, converta essa palavra para letras minúsculas.
let texto = "Aprendendo Javascript";
console.log(texto.substring(0, 10).toLowerCase());
/* O método `substring` é usado para extrair uma parte de uma string entre dois índices especificados. Ele retorna uma nova string que começa no índice inicial (primeiro parâmetro) e vai até, mas não inclui, o índice final (segundo parâmetro).
Parâmetros 0 e 10

- **0**: Este é o índice inicial. Indica o início da string, ou seja, o primeiro caractere.
- **10**: Este é o índice final. Indica a posição onde a extração deve parar, mas não inclui o caractere nesta posição.*/

/*Exercício 3: Dada a string "Aprendendo Python", extraia a palavra "Python" e substitua por
“Javascript”.
// let texto = "Aprendendo Python";
// console.log(texto.replace("Python", "Javascript"));
/*O método replace foi usado porque ele substitui a primeira ocorrência da palavra Python por Javascript*/

/*Exercício 4: Dada a string 'cadeira, mesa, sofá, armário', divida essa string em um array de
produtos e remova o item 'sofá' da lista.
Exemplo de Saída: “["cadeira", "mesa", "armário"]”*/
// let texto = "cadeira, mesa, sofá, armário";
// //criar a lista (array)
// let lista = texto.split(", ");
// console.log(lista);
// //remover o item "sofá" da lista sem saber o index dele, logo precisa saber o índice dele
// lista.splice(lista.indexOf("sofá"), 1);
// console.log(lista);
