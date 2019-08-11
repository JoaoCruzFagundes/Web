const saudacao = "opa" //contexto lexico 1

function exec() {
    const saudacao = "Falaaa" //contexto lexico 2
    return saudacao
}

const cliente = {
    nome: "Joao",
    idade: 17,
    peso: 70,
    endereco:{
        Rua: "Rua everes augusto figueiredo dos santos",
        numero: 247
    }

}
console.log(saudacao)
console.log(exec())
console.log(cliente)

