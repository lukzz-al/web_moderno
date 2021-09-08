// O require faz cache do lugar do objeto

const contadorA = require('./istanciaUnica')
const contadorB =  require('./istanciaUnica')

const contadorC =  require('./istanciaNova')()
const contadorD =  require('./istanciaNova')()

contadorA.incrementar()
contadorA.incrementar()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)