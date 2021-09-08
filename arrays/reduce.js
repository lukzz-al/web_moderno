const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Marcos', nota: 9.8, bolsista: false },
    { nome: 'Carol', nota: 8.5, bolsista: true }
]

console.log(alunos.map( a => a.nota))
const resultado = alunos.map( a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador)
    return acumulador + atual
}, 0)

console.log(resultado)