function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2).replace('.', ',')}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join("")
}

const preco = 29.9
const precoParcelado = 11
console.log(real `O preco do produto pode ser pago em 1x de ${preco} ou 3x de ${precoParcelado}`)