const sequencia = {
    _valor: 1, // convenção usan o _ na frente de variáveis 'privadas'
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // não precisa do ()
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 700 // valor inferior a 1000, não foi alterado
console.log(sequencia.valor, sequencia.valor)