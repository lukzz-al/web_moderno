const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil && p.preco > 1000
}))

const caro = p => p.preco > 1000
const fragil = p => p.fragil == true

console.log(produtos.filter(fragil).filter(caro))