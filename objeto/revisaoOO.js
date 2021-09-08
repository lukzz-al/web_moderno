// coleção dinamica pares chave /  valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do protudo'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto['marca do protudo']
delete produto.preco
console.log(produto)

const Carro = {
    modelo: 'A4',
    valor: 89145.15,
    proprietario: {
        nome: 'José',
        idade: 45,
        endereco: {
            logradouro: 'Rua Silvestre',
            numero: 112
        }
    },
    condutores: [{
        nome: 'Douglas' ,
        idade: 37
    }, {
        nome: 'Maria',
        idade: 23
    }],
    calcularValorSeguro: function(){
        //...
    }
}

Carro.proprietario.endereco.numero = 1000
Carro['proprietario']['endereco']['logradouro'] =  'Av. Gigante'
delete Carro.condutores
delete Carro.proprietario.endereco
delete Carro.calcularValorSeguro

console.log(Carro)
