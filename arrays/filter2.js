Array.prototype.filter2 = function(callback){
    let novoArray = []
    for( let i = 0; i < this.length; i++ ) {
        if(callback(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

const caro = p => p.preco > 1000
const fragil = p => p.fragil == true

console.log(produtos.filter(fragil).filter(caro))