// Object.preventExtensions -> não deixa adicionar novos atributos
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 9.99, tag:'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)
console.log('')

//Object.seal -> não deixa adicionar ou remover atributos, apenas editar

const pessoa = {nome: 'Juliana', idade: 39}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobreNome = 'Silva'
delete pessoa.nome
pessoa.idade = 40
console.log(pessoa)
console.log('')

//Object.freeze -> objeto selado + valores constantes

const carro = {modelo: 'f1', marca:'ferrari', ano: 2019}
Object.freeze(carro)

carro.placa = 'abc123'
delete carro.modelo
carro.ano = 2020
console.log(carro)