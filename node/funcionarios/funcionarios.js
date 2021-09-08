// Desafio: Achar a mulher chinesa com menor salário
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const getMulheresChinesas = (e) => e.genero === "F" && e.pais === 'China'
const getMenorSalario = (atual, acumulador) => {
    return atual.salario < acumulador.salario ? atual : acumulador
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const menorSalChina = funcionarios.filter(getMulheresChinesas).reduce(getMenorSalario)
    console.log(menorSalChina)
})




