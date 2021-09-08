require('./global') // só rpecisa fazer isso uma vez, que funciona em TODOS os arquivos

console.log(MinhasApp.saudacao())
console.log(MinhasApp.nome)

MinhasApp.nome = 'Não é mais maneiro' // perigoso, pode ser alterado em todos os lugares tbm
console.log(MinhasApp.nome)