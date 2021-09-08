// Função factory é aquela que retorna um objeto

function criarProduto(nome, valor, desconto = 0) {
    return{
        nome,
        valor,
        desconto,
        valorFinal: valor - (valor * (desconto / 100))
    }
}

console.log(criarProduto('Sabonete', 10.0))
console.log(criarProduto('Bolacha', 12.0, 20))