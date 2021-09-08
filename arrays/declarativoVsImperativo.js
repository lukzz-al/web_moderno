const alunos = [
    { nome: 'João', nota: 8.23},
    { nome: 'Pedro', nota: 9.75}
]

// Imperativo
let total1 = 0
for (let i=0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(`A média é ${ total1 / alunos.length }`)

// Declarativo
const getNota = a => a.nota
const soma = (acumulador, atual) => acumulador + atual

let total2 = alunos.map(getNota).reduce(soma)
console.log(`A média é ${ total2 / alunos.length })`)