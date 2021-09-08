// não aceita repetições /  não indexada
const times = new Set()
times.add('Vasco')
times.add('Palmeiras').add('Flamengo').add('Corinthians').add('São Paulo')
times.add('Palmeiras')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('São Paulo'))
times.delete('Palmeiras')
console.log(times.has("Palemiras"))

const nomes = ['Lucas', 'Alberto', 'Julio', 'Maria']
const nomesSet = new Set(nomes)
console.log(nomesSet)
