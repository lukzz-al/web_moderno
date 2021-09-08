function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve',  456)

console.log(aula1)
console.log(aula2)

//simulando o new

function Novo(f, ...params) {
    obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = Novo(Aula, 'Bem vindo', 123)
const aula4 = Novo(Aula, 'Até breve',  456)

console.log(aula3)
console.log(aula4)