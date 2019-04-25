const escola = "Cod3r"

console.log(escola.charAt(4))
//charCodeAt traz o codigo relacionado a tabela
console.log(escola.charCodeAt(3))
console.log(escola.indexOf("3"))
console.log(escola.substring(0))
console.log(escola.substring(0, 3))
// une as palavras
console.log( "Escola " .concat(escola).concat("!").concat("Daleee"));
// troca o numero pedido pela letra dada
 //pega toda a palavra -/\w/g
console.log(escola.replace(/\w/g, "e"))
// gerar array a partir do divisor dado
console.log("Ana,Maria,Pedro".split(","))

