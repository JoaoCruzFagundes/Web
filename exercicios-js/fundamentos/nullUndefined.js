let valor
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString())//erro

const produto = {}
console.log(produto.preco)

produto.preco = 3 // evitar atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)