const peso1 = 1.0;
const peso2 = 2.0;


console.log(peso1, peso2);
console.log(Number.isInteger(peso1));



const avaliacao1 = 9.2
const avaliacao2 = 7.5
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total /(peso1 + peso2)
console.log(media.toFixed(2))
console.log(Number.isInteger(total))
console.log(media.toString())
console.log(typeof media)

// cuidados
console.log(7/0);
console.log("10"/2);
console.log(0.1 +0.7);