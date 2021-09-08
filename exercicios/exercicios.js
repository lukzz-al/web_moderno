
// 1. 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,multiplicação e divisão desses valores.

function calculos (a, b) {
    console.log(`A soma dos valores é ${a + b}`)
    console.log(`A subtração dos valores é ${a - b}`)
    console.log(`A multiplicação dos valores é ${a * b}`)
    console.log(`A divisão dos valores é ${a / b}`)
    console.log('')
    console.log('')
}

calculos(5,72)

/*2 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function nomeiaTriangulo (lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Este triângulo é Equilatero!"
    } else if ( lado1 === lado2 || lado2 === lado3 || lado1 == lado3 ) {
        return "Este triângulo é Isósceles"
    } else {
        return "Este triângulo é Escaleno"
    }
}

console.log(nomeiaTriangulo(12,1,17))
console.log('')

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

function Exponenciacao(base, expoente) {
   return Math.pow(base, expoente)
}

console.log(Exponenciacao(5,2))
console.log('')

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

const div = (dividendo, divisor) => console.log(`O resultado da divisão é: ${dividendo / divisor} e o resto ${dividendo % divisor}`)

div(10,2)
console.log('')

/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */

function Dinheiro(valor) {
    return `R$${valor.toFixed(2).toString().replace(".", ",")}`
}

console.log(Dinheiro(0.30000000000000004))
console.log('')

/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = function(capInicial, taxa, tempo) {  // capInical = valor em reais, taxa %, tempo em anos
    return capInicial * (taxa/100) * tempo
}

const jurosComposto = (capInicial, taxa, tempo) => capInicial * Math.pow(1+(taxa/100), tempo).toFixed(4)

console.log("Valor do juros Simples " + jurosSimples(1000, 10, 3))
console.log("Valor do juros Composto " + jurosComposto(500, 5, 3))

/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo */

function Bhaskara(ax, bx, c) {
    let resultado = []
    const delta = Math.sqrt(Math.pow(-bx, 2) - 4 * ax * c)
    if (delta >= 0) {
        x1 = (-bx + delta) / (2 * ax )
        x2 = (-bx - delta) / (2 * ax )

        resultado.push(x1, x2)
        return resultado
    } else {
        return "Delta é negativo!"
    }
}

console.log(Bhaskara(3, -5, 12))
console.log('')

/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo) 
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)*/

const pontuacoes = [10, 20, 20, 8, 25, 3, 0, 30, 1]

function Recordes(lista){
    recorde = lista[0]
    recordesBatidos = 0
    menorPontuacao = lista[0]
    for (let i in lista) {
        if (recorde < lista[i]){
            recorde = lista[i]
            recordesBatidos++
        }
        if (menorPontuacao > lista[i]) {
            menorPontuacao = lista[i]
            piorJogo = parseInt(i) + 1  //por algum motivo o i está como string
        }
    }
    overall = [recordesBatidos, piorJogo]
    return overall
}

resultado = Recordes(pontuacoes)
console.log(`O número de recordes batidos foi: ${resultado[0]}  e a pior pontuação aconteceu no jogo ${resultado[1]}`)
console.log('')



/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

function Notas(nota)  {
    if (Math.round(nota/5)*5 < 40) {
        console.log(`Você foi reprovado, sua nota foi de ${nota}`)
    } else {
        console.log(`Você foi aprovado, sua nota foi de ${Math.round(nota/5)*5}`)
    }
}

Notas(84)
console.log('')

// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne trueou false.

const div3 = num => num%3 === 0 ? true : false

console.log(div3(6))
console.log('')

/* 11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

function isBissexto(ano = 0) {
    let bissexto = ""

    if ((ano%4) === 0){
        bissexto = 'É um ano bissexto'
    }else {
        bissexto = 'Não é um ano bissexto'
    }
    if (ano % 100 === 0 && ano % 400 !== 0) {
        bissexto = 'Não é um ano bissexto'
    }
    console.log(bissexto)
}

isBissexto(2044)

/* 12) Faça um algoritmo que calcule o fatorial de um número. */

const fatorial = function(num) {
    let res = num
    for (i = 0; i < num - 1; i++) {
            res = (res * (num - (i+1)))
    }
    return res
}

console.log(fatorial(10))
console.log('')

/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function isDiaUtil(num){
    switch (num) {
        case 1:
            console.log('Não é um dia util')
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log('É um dia util')
            break;
        case 7:
            console.log('Não é um dia util')
            break;
    }    
}

isDiaUtil(7)
console.log('')

/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

const Mercado = function(fruta) {
    switch(fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui')
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break;
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break;
        default: 
            console.log('ERRO, fruta inválida')
            break;
    }
}

Mercado('maçã')
console.log('')

/*15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.*/

const Concecionaria = (modelo) => {
    switch (modelo) {
        case 'hatch':
            modelo = 'Compra efetuada com sucesso'
            break
        case 'sedan': case 'motocicleta': case 'caminhonete':
            modelo = 'Tem certeza que não prefere este modelo?'
            break;
        default:
            modelo = 'Não trabalhamos com este tipo de automóvel aqui'
            break;
    }
    return modelo
}


console.log(Concecionaria('hatch'))
console.log('')

/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculadora(valor1, operacao = '', valor2) {
    let res
    switch(operacao) {
        case '+':
            res = valor1 + valor2
            break;
        case '-':
            res = valor1 - valor2
            break;
        case '*':
            res = valor1 * valor2
            break;
        case '/':
            res = valor1 / valor2
            break;
        default:
            res = 'Operação inválida'
    }
    return res
}

console.log(calculadora(5, '*', 7))
console.log('')

/*7) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function Aumento(salario, planoTrab){
    switch(planoTrab){
        case 'A':
            console.log(`Seu aumento será de 10% e o novo salário será: ${salario + salario*0.1}`)
            break;
        case 'B':
            console.log(`Seu aumento será de 15% e o novo salário será: ${salario + salario*0.15}`)
            break;
        case 'C':
            console.log(`Seu aumento será de 20% e o novo salário será: ${salario + salario*0.2}`)
            break;
        default:
            console.log(`O plano de trabalho: ${planoTrab} é inválido`)
            break;
    }
}

Aumento(1500.12, 'B')
console.log('')

/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function lerExtenso(num) {
    switch(num) {
        case 1:
            console.log('Número um')
            break;
        case 2:
            console.log('Número dois')
            break;
        case 3:
            console.log('Número três')
            break;
        case 4:
            console.log('Número quatro')
            break;
        case 5:
            console.log('Número cinco')
            break;
        case 6:
            console.log('Número seis')
            break;
        case 7:
            console.log('Número sete')
            break;
        case 8:
            console.log('Número oito')
            break;
        case 9:
            console.log('Número nove')
            break;
        case 10:
            console.log('Número dez')
            break;
        default:
            console.log('Número fora do intervalo')
            break;
    }
}

lerExtenso(2)
console.log('')

/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function Lanche(cod, quantidade) {
    let totalPagar = 0
    switch(cod) {
        case 100:
            totalPagar = 3.00 * quantidade
            break;
        case 200:
            totalPagar = 4.00 * quantidade
            break;
        case 300:
            totalPagar = 5.50 * quantidade
            break;
        case 400:
            totalPagar = 7.50 * quantidade
            break;
        case 500:
            totalPagar = 3.50 * quantidade
            break;
        case 600:
            totalPagar = 2.80 * quantidade
            break;
        default:
            totalPagar  = 'Código inválido. Item não existe no cardápido'
    }
    return totalPagar
}

console.log(Lanche(400, 5))
console.log('')

/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

const Cedulas = function(valor) {
    let n100 = 0
    let n50 = 0
    let n10 = 0
    let n5 = 0
    let n1 = 0

    for (i=0; i < valor;){
        if (i+100 <= valor){
            i += 100
            n100++
        } else if (i+50 <= valor){
            i += 50
            n50++
        } else if (i+10 <= valor){
            i += 10
            n10++
        } else if (i+5 <= valor){
            i += 5
            n5++
        } else if (i+1 <= valor){
            i += 1
            n1++
        }
    }

    let Notas = {
        'R$1.00' : n1,
        'R$5.00': n5,
        'R$10.00': n10,
        'R$50.00': n50,
        'R$100.00': n100
    }
    let final = []
     for (j in Notas) {
         if(Notas[j] !== 0) {
            final.push(Notas[j], j)
         }
     };

     return final

}

function contarCed(final){
    let frase = ''
    for (i = 0; i < Object.keys(final).length ; i += 2)  {
        frase = frase + `${final[i]} nota(s) de ${final[i+1]}.` + ' '
    }
    console.log(frase)
}

contarCed(Cedulas(140))
console.log('')

/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

function valorConvenio(idade) {
    valor = 100
    if (idade < 10) {
        valor += 80
    } else if (10 <= idade && idade <= 30) {
        valor += 50
    } else if (30 < idade && idade <= 60) {
        valor = valor + 95
    } else if (idade > 60) {
        valor += 130
    }
    return valor
}

console.log(`Você ira pagar R$${valorConvenio(61)}.00 pelo convenio`)
console.log('')

/* 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido*/

function Anuidade(mes, valor) {
    if (mes !== 1) {
        valor = valor * Math.pow((1+0.05), (mes-1))
    }
    return valor
}

console.log(Anuidade(6, 1450).toFixed(2))
console.log('')

/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function NotasAluno(codigo, n1, n2, n3) {
    for (; codigo>0; codigo--) {
        if (n1 === Math.max(n1, n2, n3)) {
            valorfinal = (n1 * 4 + n2 * 3 + n3 * 3) / (4 + 3 + 3)
        } else if (n2 === Math.max(n1, n2, n3)) {
            valorfinal = (n2 * 4 + n1 * 3 + n3 * 3) / (4 + 3 + 3)
        } else if (n3 === Math.max(n1, n2, n3)) {
            valorfinal = (n3 * 4 + n2 * 3 + n1 * 3) / (4 + 3 + 3)
        }

    let status = valorfinal >= 5 ? 'Aprovado' : 'Reprovado'
    console.log(`Código do aluno:  ${codigo}, Notas: ${n1}, ${n2}, ${n3}, Média final: ${valorfinal} Situação: ${status}`)
    }
}

NotasAluno(1, 4, 5, 5)
console.log('')

/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.*/

const helloOnze = () => {
    let i = 1
    while (i <= 11){
        console.log(`${i}.Hello World!`)
        i++
    }
}

helloOnze()
console.log('')

/*25) Escrever um programa para exibir os números de 1 até 50 na tela.*/

const exibeNum = () => {
    let i = 1
    let string = ''
    while (i <= 50) {
        string = string + i + ' '
        i++
    }
    console.log(string)
}

exibeNum()
console.log('')

/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.*/

const encontraPar = () => {
    pares = []
    for (let i = 1; i <= 100; i++){
        if ( i%2 === 0 ) {
            pares.push(i)
        }
    }
    console.log(pares)
}

encontraPar()
console.log('')

/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/

const criarCrianca = function(nome, altura, taxaCresc) {
    return{
        nome,
        altura,
        taxaCresc
    }
}

function Crescendo(crianca1, crianca2) {

    let ultrapassa = ''
    if (crianca1.altura !== crianca2.altura) {
        menor = crianca1.altura < crianca2.altura ? crianca1  : crianca2
        maior = crianca1.altura > crianca2.altura ? crianca1  : crianca2
    
        if (menor.taxaCresc > maior.taxaCresc) {
            for (let i = 0; menor.altura <= maior.altura; i++) {
                menor.altura = menor.altura + menor.altura * menor.taxaCresc
                maior.altura = maior.altura + maior.altura * maior.taxaCresc
                console.log('lopando')
            }
            ultrapassa = `${menor.nome} é o mais baixo, porém conseguirá ultrapassar o/a ${maior.nome} em ${i} anos`
        } else{
            ultrapassa = `${menor.nome} é o mais baixo, e não ultrapassará a altura do/a ${maior.nome}`
        }
        console.log(ultrapassa)
    } else {
        console.log(`${crianca1.nome} e ${crianca2.nome} tem a mesma altura`)
    }
}

menino1 = criarCrianca('Luis', 1.50, 0.7)
menino2 = criarCrianca('Carlos', 1.61, 0.5)

Crescendo(menino1, menino2)
console.log('')

/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/

const parImpar = (num) => {
    let impares = 0
    let pares = 0
    for(i in num) {
        if(num[i]%2 === 0){
            pares++
        }else {
            impares++
        }
    }
    console.log('Temos: ' + pares + ' números pares e ' + impares + ' números impares')
}

parImpar([5, 7, 12, 22, 77])
console.log('')

/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.*/

function intervalo (vetor) {
    let dentro = 0
    let fora = 0
    for (i in vetor) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++
        }else{
            fora++
        }
    }
    console.log(`Temos ${dentro} números dentro do intervalo [10,20] e ${fora} números fora `)
    
}

intervalo([70, 15, 27, 18, 20, 74, 2, 6])
console.log('')

/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/
const maiorMenor = (vetor) => {
    let maior = vetor[0]
    let menor = vetor[0]
    for (i in vetor) {
        if (vetor[i] < menor){
            menor = vetor[i]
        }else if(vetor[i] > maior) {
            maior = vetor[i]
        }
    }

    console.log(`O maior número é ${maior} e o menor ${menor}`)
}

maiorMenor([70, 15, 27, 18, 20, 74, 2, 6])
console.log('')

/* 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function Negativos(vetor) {
    let contador = 0
    for (i in vetor){
        if (vetor[i] < 0) {
            contador ++
        }
    }
    console.log(contador)
}

Negativos([-10, 7, 12, 5, 17, -14, -1])
console.log('')

/* 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function Media(vetor) {

    let media = 0
    for (i in vetor) {
        media += vetor[i]
    } 
    media = media / vetor.length

    return media
}

console.log(Media([4, 5, 12, 3]))
console.log('')

/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/

function vetConcat() {
    let vetInt = [1, 2, 3, 4]
    let vetString = ['oi', 'tchau', 'olá', 'té mais']
    let vetDoble = [1.15, 7.2, 6.12, 3.14]
    
    let vetInString = vetInt.concat(vetString)
    let vetTudo = vetDoble.concat(vetInt,vetInString)
    
    console.log(vetInString)
    console.log(vetTudo)
    console.log('')
}

vetConcat()

/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras*/

function comparaLetra(string1, string2) {

    if(string1.length === string2.length) {
        string1 = string1 + ' '
    }

    let menor = string1.length < string2.length ? string1 : string2
    let maior = string1.length > string2.length ? string1 : string2
    let semelhancas = 0

    menor = menor.toUpperCase()
    maior = maior.toUpperCase()

    for (i = 0; i < menor.length; i++) {
        let fatia = menor.slice(i, i+1)
        if (maior.indexOf(fatia) !== -1) {
            semelhancas++
        }
    }
    if (semelhancas == menor.length){
        return true
    }else {
        return false
    }
}
console.log(comparaLetra('CAMELO', 'junior'))
console.log('')

/* 35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console. */

const mostraVetor = function () {
    let vetorPilha = [1, 2, 3, 4, 5]
    let vetorAdiciona = [6, 7, 8, 9, 10]

    vetorPilha = vetorPilha.concat(vetorAdiciona)

    console.log(vetorPilha)
    console.log(vetorAdiciona)
}

mostraVetor()
console.log('')

/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.*/

function multVet(vetor, num){
    for(i in vetor) {
        vetor[i] = vetor[i] * num
    }
    return vetor
}

function multVet5(vetor, num) {
    for(i in vetor) {
        if(vetor[i] > 5) {
        vetor[i] = vetor[i] * num
        }
    }
    return vetor
}

console.log(multVet([1, 2, 4, 6, 7], 2))
console.log(multVet5([1, 2, 4, 6, 7], 2))
console.log('')

/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

function pa(n, a1, r) {
    let pa = [a1]
    let soma = 0
    let aN = a1

    for (i = 0; i <= n; i ++){
          aN += a1 + r
        pa.push(aN)
    }
    for (j in pa) {
        soma += pa[j]
    }

    console.log(pa)
    console.log(soma)
    console.log('')


}

function pg(n, a1, r) {
    let pg = [a1]
    let soma = 0
    let aN = a1

    for (i = 0; i <= n; i ++){
          aN *= r
        pg.push(aN)
    }
    for (j in pg) {
        soma += pg[j]
    }

    console.log(pg)
    console.log(soma)
    console.log('')


}

pa(7, 4, -8)
pg(7, 4, 3)

/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

function imprimeImpar(inicio, fim) {
    let final = ''
    let guarda = 0
    if (inicio > fim) {
        guarda = inicio
        inicio = fim
        fim = guarda
    }
    for (i = inicio; i < fim; i++){
        if (i%2 === 1){
            final += i + ", "
        }
    }
    console.log(final)
}

imprimeImpar(50, 12)

/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

function inverteVet(vetA, vetB) {
    let guarda = []
    guarda = vetA
    vetA = vetB
    vetB = guarda
    console.log(vetA, vetB)
    return vetA
}

inverteVet([1, 2, 3], [3, 2, 1])
console.log('')

/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A*/

function conceitoNota(vetor) {
    let final = ''
    
    for (i in vetor){
        if( vetor[i] <= 4.9){
            final += 'D, '
        }else if( vetor[i] > 4.5 && vetor[i] <= 6.9){
            final += 'C, '
        }else if( vetor[i] > 6.9 && vetor[i] <= 8.9){
            final += 'B, '
        }else if( vetor[i] > 8.9){
            final += 'A, '
        }
    }
    console.log(final)
    console.log('')

}

conceitoNota([10, 8, 10, 3, 5, 6])