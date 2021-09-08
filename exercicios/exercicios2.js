/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.
*/
const cumprimentar = (nome) => `Olá ${nome}!`
console.log(cumprimentar('Lucas'))
console.log('')

/*Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.*/

const idadeEmDias = (idade) => idade * 365
console.log(idadeEmDias(25))
console.log('')

/* Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.*/

const salarioHora = (horas, valorHora) => {
    salario = horas * valorHora 
    return `Salário igual á R$${salario.toFixed(2).toString().replace('.',',')}`
}
console.log(salarioHora(150, 40.5))
console.log('')

/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.*/

function mes(num) {
    switch(num){
        case 1: return 'Janeiro'
        case 2: return 'Fevereiro'
        case 3: return 'Março'
        case 4: return 'Abril'
        case 5: return 'Maio'
        case 6: return 'Junho'
        case 7: return 'Julho'
        case 8: return 'Agosto'
        case 9: return 'Setembro'
        case 10: return 'Outrubro'
        case 11: return 'Novembro'
        case 12: return 'Dezembro'
        default: return 'Mês inválido'
    }
}
console.log(mes(7))
console.log('')

/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
.*/

const reverse = function(parametro) {
    if (typeof(parametro) == 'boolean'){
        return !parametro
    }else if(typeof(parametro) == 'number'){
        return -parametro
    }else{
        return "booleano ou número esperados, mas o parâmetro é do tipo " + typeof(parametro)
    }
    
}
console.log(reverse(3))
console.log('')

/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

function multiplicaçãoSemOperador(num1, num2) {
    let res = 0
    if(num1 >= 0 && num2 >= 0) {
        for(i=0; i<num2; i++){
            res += num1
        }
    }
    return res
}
console.log(multiplicaçãoSemOperador(10,2))
console.log('')

/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/

function filtraNum(array){
    const isNum = (e) => typeof(e) == 'number'
    return array.filter(isNum)
}

console.log(filtraNum(['A', 2, 4, 5.5, 'Tenis', {}, []]))
console.log('')

/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:*/

function objParaArray(obj) {
   return Object.entries(obj)
}

console.log(objParaArray( { nome: "Maria", profissao: "Desenvolvedora de software" } ))
console.log('')

/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/
const isPar = e => e % 2 == 0
function somentePares(array) {
    return array.filter(isPar)
}

console.log(somentePares([1, 2, 3, 4, 5, 6, 7, 8]))

/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.*/
const soma = (acumulador, e) => acumulador + e
function somador(array) {
    return array.reduce(soma)
}
console.log(somador([15, 15, 15, 15]))
console.log('')

/*Criar uma função que receba um array de números e retorne o menor número desse array.*/
const comparaMenor = (acumulador, atual) => acumulador <= atual ? acumulador : atual
const menorDoArray = (array) => array.reduce(comparaMenor)

console.log(menorDoArray([74, 12, 75, 64, 85, 95]))
console.log('')

/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/

function contadorDePalavras(string = 0) {
    let palavras = string.length > 0 ? 1 : 0
    let idx = string.indexOf(' ')
    while (idx != -1) {
        idx = string.indexOf(' ', idx + 1);
        palavras++
    }
    return palavras
}
console.log(contadorDePalavras('Safe, dms'))
