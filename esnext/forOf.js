for (letra of 'TRDROP') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']
for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for (assunto of assuntoMap){
    console.log(assunto)
}

for (chaves of assuntoMap.keys()) {
    console.log(chaves)
}

for (valores of assuntoMap.values()){
    console.log(valores)
}

for ([ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])

for( letra of s) {
    console.log(letra)
}