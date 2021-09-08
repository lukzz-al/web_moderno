const pessoa = {
    saudação : "Bom dia!",
    falar() {
        console.log(this.saudação)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito de paradigmas funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()