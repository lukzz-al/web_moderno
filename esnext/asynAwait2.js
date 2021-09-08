function gerarNumeroEntre(max, min, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min +1
        const aleatorio = parseInt(Math.random() * fator + min)
        if (numerosProibidos.includes(aleatorio)){
            reject('Numero repetido!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentivas = 1) {
    try{
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumeroEntre(1, 60, numeros))
        }
        return numeros
    }catch(e){
        if (tentivas > 10){
            throw `Não deu certo, excedeu número de tentativas`
        }else{
            gerarMegaSena(qtdNumeros, tentivas + 1)
        }
    }

}

gerarMegaSena(6)
        .then(console.log)
        .catch(console.log)