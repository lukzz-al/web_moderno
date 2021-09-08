function gerarNumeroEntre(max, min) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = max - min +1
        const aleatorio = parseInt(Math.random() * fator + min)
        resolve(aleatorio)
    })
}

gerarNumeroEntre(0, 10)
    .then(valor => valor * 10)
    .then(valorx10 => console.log(`O valor gerado x10 é ${valorx10}`))