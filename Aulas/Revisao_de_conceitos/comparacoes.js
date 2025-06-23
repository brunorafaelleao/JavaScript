console.log("Comparações em JavaScript");
const a = 10;
const b = 20;
const c = "10";

// Maior que (>)
console.log(a > b); // false

// Menor que (<)
console.log(a < b); // true

// Maior ou igual (>=)
console.log(b >= 20); // true

// Menor ou igual (<=)
console.log(a <= 10); // true

// Igual (==) - compara apenas os valores, não o tipo
console.log(a == c); // true

// Diferente (!=) - compara apenas os valores, não o tipo
console.log(b != c); // true

// Idêntico (===) - compara valor e tipo
console.log(a === c); // false (10 é número, "10" é string)
