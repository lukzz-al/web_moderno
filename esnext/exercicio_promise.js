const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'dados.txt')

function lerArquivo(caminho) {
    return new Promise((resolve) => {
        fs.readFile(caminho, function(__, conteudo){
            resolve(conteudo.toString())
        })
    })
}


lerArquivo(caminho)
    .then(conteudo => `O valor final é:  ${conteudo}`)
    .then(console.log)