const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala anonimo!\n')
} else {
    process.stdout.write('Digite seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome} `)
    }) 
}


