// pessoa -> 123 -> {}
// a constante pessoa está apontando para o endereço de memória 123, e esse sim não muda, agora o conteudo lá dentro pode ser mutável
const pessoa = {
    nome: 'João'
}
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {}
// pessoa = {nome: 'Maria'} por exemplo vc estaria tentando redefinir o objeto, ou seja mudar endereço de memória para o qual pessoa está apontando e esse o const não deixa alterar

Object.freeze(pessoa) // agora o objeto está congelado e não é mais alterável.

pessoa.nome = 'Maria'
delete pessoa.nome
pessoa.end = 'Rua treze'
console.log(pessoa)

// criando objeto imutável

const pessoaConstante = Object.freeze({nome: 'Julio'})
pessoaConstante.nome = 'Juju'
console.log(pessoaConstante)

