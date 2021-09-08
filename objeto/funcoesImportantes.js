const pessoa = {
    nome: 'Rebeca',
    idade: 3,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // separa em pares de array o conjunto chave valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2018'
})

pessoa.dataNascimento = '01/05/1999'
console.log(pessoa.dataNascimento)

// Obj EcmaScript 2015
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}

const obj = Object.assign(dest, o1, o2) //  concatena os atributos, e se tiver chaves igual sobrescreve com o valor da ultima, o primeiro parametro é o destino

Object.freeze(obj)
obj.c = 123
console.log(obj)