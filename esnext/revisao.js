// let // const //  var
{
    let a = 1 // escopo de bloco
    var b = 2// escopo global e de func
    console.log(a)
}
console.log(b)

// template string
const produto = 'iPad'
console.log(`O ${produto} é caro`) // interpolação

// Destructuring
const [...letras] = 'TRDROP'
console.log(letras)

const [x,,y] = [1, 2, 3]
console.log(x,y)

const {idade: i, nome} = {nome: 'Ana', idade: 3}
console.log(nome, i)