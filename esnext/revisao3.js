// ES8: Object values, entries

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias notação literal de obj

const nome = 'Maria'
const pessoa = {
    nome,
    falar() {
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.falar())

//Class

class Animal {}

class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}

console.log(new Cachorro().falar())