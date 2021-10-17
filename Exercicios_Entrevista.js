/* A jornada de trabalho semanal de um funcionário é de 40 horas.
O funcionário que trabalhar mais de 40 horas receberá hora extra,
cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo em que uma função receba como parâmetros o
número de horas trabalhadas em um mês, o salário por hora e retorne o
salário total do funcionário, que deverá ser acrescido das horas extras,
caso tenham sido trabalhadas(considere que o mês possua 4 semanas exatas). */

const pagamento = function (horasTrabalhadas, valorHora) {
    if (horasTrabalhadas > 120){
        let horasExtras = horasTrabalhadas - 120
        return horasTrabalhadas * valorHora + (horasExtras * valorHora)
    }else{
        return valorHora * horasTrabalhadas
    }
}

console.log(pagamento(125, 7.50))