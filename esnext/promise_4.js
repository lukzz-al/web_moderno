function gerarNumeroEntre(max, min, tempo = 2000) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min +1
            const aleatorio = parseInt(Math.random() * fator + min)
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumero() {
    return Promise.all([
        gerarNumeroEntre(1,100, 4000),
        gerarNumeroEntre(1,100, 200),
        gerarNumeroEntre(1,100, 2000),
        gerarNumeroEntre(1,100, 1000),
        gerarNumeroEntre(1,100, 10)
    ])
}
console.time('Promise')

gerarVariosNumero()
    .then(console.log)
    .then(() => console.End('Promise'))