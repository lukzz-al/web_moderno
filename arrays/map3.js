Array.prototype.map2 = function (callback) {
    let novoArray = []
    for(let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}

const carrinho = [
    ' {"nome": "Borracha", "preco": 3.45 }',
    ' {"nome": "Caderno", "preco": 13.90 }',
    ' {"nome": "Kit de Lapis", "preco": 41.22 }',
    ' {"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com os preços

const objetificando = e => JSON.parse(e)
const extraindoPreco = e => e.preco

let obj = carrinho.map2(objetificando).map2(extraindoPreco)

console.log(obj)
