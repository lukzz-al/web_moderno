const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// síncrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)
console.log('')

// assincrono 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`O usuário é ${config.db.user} e a senha: ${config.db.pass}`)
})
console.log('') 

// epecificamente para arquivos json

const config = require('./arquivo.json')
console.log(config.db)
console.log('')

// lendo uma pasta

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta: ')
    console.log(arquivos)
} )

console.log('')