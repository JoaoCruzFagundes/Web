// Funcao em JS First classe Object
// higher order function

// criar de forma literal
function fun1(){ }

// armazenar em uma variavel 
const fun2 = function(){}

// armazenar dentro de um array
const array = [function(a,b){return a + b }]
console.log(array[0](2,3))

// armazenar dentro de um obj
const obj = {}
obj.falar = function () { return "opa" }
console.log(obj.falar())

// passar funcao como parametro 
function run(fun){
    fun()
}
run(function () {console.log  ("Ta dando certo..") })

//uma funcao pode retornar/conter uma funcao
  function soma(a, b){
      return function (c){
          console.log(a+b+c)
      }
  }
soma(2,3)(4)

