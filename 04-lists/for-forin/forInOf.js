const service = require("./service")


async function main () {

  try{
        let result = await service.obterPessoas('Luke')

         //for(let i = 0; i <= result.results.length -1; i++) 0.263ms
        let names = []
        console.time("FOR I")
        for(let i = 0; i <= result.results.length -1; i++){
            const pessoas = result.results[i]
            names.push(pessoas.name)
        }
        console.timeEnd("FOR I")
        console.log(`Names: ${names}`)

        //for(let i in result.results) 0.045ms
        let nome = []
        console.time("FOR IN")
        for(let i in result.results){
            const pessoa = result.results[i]
            nome.push(pessoa.name)
        }
        console.timeEnd("FOR IN")
        console.log(`Names: ${nome}`)


        //for(pessoas of result.results) 0.065ms
        let name = []
        console.time("FOR OF")
        for(pessoas of result.results){
            name.push(pessoas.name)
        }
        console.timeEnd("FOR OF")
        console.log(`Names: ${name}`)
    }catch(e){
        console.error(`Ocorreu um erro ${e}`)
    }
}


main()