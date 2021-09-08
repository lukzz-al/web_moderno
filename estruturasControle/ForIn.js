const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 25,
    peso: 50,
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`) // as variáveis estão entre cráses
}