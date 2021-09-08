const tecnologias = new Map()

tecnologias.set('react', {framework: true})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function() { }, 'Função'],
    [{}, "Objeto"],
    [123, 'Numero']
])

chavesVariadas.forEach((ch, vl) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)