
function tratarErrorELancar(erro){
    throw new Error('Não possuí a váriavel nome')
    //throw 10
    //throw true
    //throw  'menssagem'
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + ("!!!"))
    } catch (e) {
       tratarErrorELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritando(obj)