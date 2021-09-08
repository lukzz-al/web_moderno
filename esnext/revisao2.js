//arrow function
const soma = (a, b) => a + b
console.log(soma(23,1))

// arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametri default
function log(texto = 'Node') {
    console.log(texto)
}

log()


// operador rest

const total = (...nums) => {
    let total = 0
    nums.forEach(e => {
      total += e  
    });
    console.log(total)
}
total(12, 1, 4, 74, 5, 3)