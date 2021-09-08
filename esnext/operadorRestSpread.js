// operador ... rest(juntar) / spread(espalhar)
// usar rest com paremtro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12457.45}
const clone = {...funcionario, departamento: 'RH'}
console.log(clone)

// usar spread com array
const grupoA = ['Marcos', 'Anderson', 'Eric', 'Yuri']
const grupoFinal = ['Pamela', 'Vitoria', ... grupoA]
console.log(grupoFinal)