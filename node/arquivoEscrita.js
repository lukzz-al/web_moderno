const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 2457.12,
    marca: "Xiaomi",
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo gerado com sucesso!' )
})