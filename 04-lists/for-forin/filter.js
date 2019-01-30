const {  obterPessoas } = require("./service")

Array.prototype.meuFilter = function (callback) {
    const lista = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, undefined === false
        if (!result) continue;
        lista.push(item)
    }
    return lista;
}


async function main () {

    try{

        let {results} = await obterPessoas('a')
        const resultado = results.filter((pessoas) => {   
          const resul = pessoas.name.toLowerCase().indexOf('lars') !== -1
          return resul
        })

        const names = resultado.map(pessoa => pessoa.name)
        console.log(`Names: ${names}`)

    }catch(e){
        console.error(`Ocorreu um erro: ${e}`)
    }

}


main()