const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem call back

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 6) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback

let notasBaixas2 = notas.filter( function(notas) {
    return notas < 6
})

console.log(notasBaixas2)

let notasBaixas3 = notas.filter(notas => notas < 6)
console.log(notasBaixas3)
