Array.prototype.forEach2 = 
function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Fernando', 'Bruno', 'Milena', 'Raquel']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice+1}) ${nome}`)
})

