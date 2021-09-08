const carrinho = [
    ' {"nome": "Borracha", "preco": 3.45 }',
    ' {"nome": "Caderno", "preco": 13.90 }',
    ' {"nome": "Kit de Lapis", "preco": 41.22 }',
    ' {"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com os preços

const objetificando = e => JSON.parse(e)
const extraindoPreco = e => e.preco

let obj = carrinho.map(objetificando).map(extraindoPreco)

console.log(obj)


