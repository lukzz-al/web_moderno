// usando notação literal

const obj = { }
console.log(obj)

// usando Object em JS

const obj2 = new Object
console.log(obj2)

// usando funções contrutoras

function Produto(nome, preco, desc){
    this.nome = nome // deixando a váriavel visivel globalmente

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.45, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// usando função factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas) 
        }
    }
}

const f1 = criarFuncionario('João', 3514, 2)
const f2 = criarFuncionario('Clara', 3414, 8)

console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))