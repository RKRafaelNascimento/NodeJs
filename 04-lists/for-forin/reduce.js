const {obterPessoas} = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]
    for (let index = 0; index <= this.length - 1; index++) {
        valorFinal = callback(valorFinal, this[index], this)
    }
    return valorFinal
}

async function main() {

    try{

    let {results} = await obterPessoas('a')
     
    const peso = results.map(item => parseInt(item.height))

    let value = peso.reduce((prev,current) => prev + current,0)

    console.log(`Pesos: ${peso} & Total: ${value}`)
    }catch(e){
        console.error(`Ocorreu um erro: ${e}`)
    }
}

main()