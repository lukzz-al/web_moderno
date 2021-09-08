const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const teste = require('teste')
console.log(teste.texto)

const http = require('http') // módulo interno do NODE -> um dos módulos Core
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)