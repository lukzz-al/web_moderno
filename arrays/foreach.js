const aprovados = ['Fernando', 'Bruno', 'Milena', 'Raquel']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice+1}) ${nome}`)
})
console.log('')

aprovados.sort().forEach( n => {
    console.log(n)
})
console.log('')

const exibirAprovado = (aprovado) => {
    console.log(aprovado)
}

aprovados.forEach(exibirAprovado)