const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Marcos', nota: 9.8, bolsista: false },
    { nome: 'Carol', nota: 8.5, bolsista: true }
]


// 1) Todos os alunos são bolsistas ?

const todosBolsistas = (resultado, proxAluno) => resultado && proxAluno
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))



// 2) Algum aluno é bolsista ?

const algmBolsista = (resultado, proxAluno) => resultado || proxAluno
console.log(alunos.map(a => a.bolsista).reduce(algmBolsista))