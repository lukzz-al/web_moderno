// O map não transforma o arry atual e sim gera um novo array

const nums = [1, 2, 4, 8, 10]

//For com propósito
let dobroNumns = nums.map(function(e){
   return e*2
})

console.log(dobroNumns)

const soma10 = e => e + 10
const triplo = e => e * 3 
const paraDineheiro = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

let resultado = nums.map(soma10).map(triplo).map(paraDineheiro)
console.log(resultado)