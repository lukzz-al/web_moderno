const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //  remove o elemento da ultima posição
console.log(pilotos)

pilotos.push('Verstappen') // adicona elemento na ultima posição
console.log(pilotos)

pilotos.shift() //  remove o primeiro elemento
console.log(pilotos)
pilotos.unshift('Hamilton') // adc no primeiro elemento
console.log(pilotos)

//splice pode adiconar e remover elementos

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

const algunsPilotos = pilotos.slice(1, 4) // cria um novo array com os itens do 1 ao 4
console.log(algunsPilotos)