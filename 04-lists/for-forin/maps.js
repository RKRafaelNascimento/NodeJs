const service = require("./service")


Array.prototype.meuMap = function(callback){
   
    const novoArrayMapeado = []
    
    for (let indice = 0; indice <= this.length -1; indice++){
        const resultado = callback(this[indice],indice)
        novoArrayMapeado.push(resultado)
    }
	return novoArrayMapeado;
}


async function main() {

    let result = await service.obterPessoas('a')

    console.time(`forEach`)
    let names = []
    result.results.forEach((items) => {
        names.push(items.name)
    })
    console.timeEnd(`forEach`)

    console.time("maps")
    let name = result.results.map((pessoa) => pessoa.name)
    console.timeEnd("maps")

    console.time("maps 2")
    let nome = []
    result.results.map((people) => {
        nome.push(people.name)
    })
    console.timeEnd("maps 2")

}


main()