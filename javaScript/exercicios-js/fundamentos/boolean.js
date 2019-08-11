let isAtivo = false;
console.log(isAtivo);

isAtivo= true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo)

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!! " ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = "aberto"))

console.log("os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))

console.log("Para finalizar")
console.log(("" || null ||0 || "epa"))

let nome = "Joao"
// testa, se a variavel estiver vazia retorna o valor passado
console.log(nome || "Desconhecido")