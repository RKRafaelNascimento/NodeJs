const fs = require("fs")
const util = require("util")

const readFileAsync = util.promisify(fs.readFile)

class DataBase {

    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivos(){
        const arquivo = await readFileAsync(NOME_ARQUIVO, 'utf-8')
        return JSON.parse(arquivo.toString())
    }

    escreverArquivo(){

    }

    async listar(id){
        const dados = await this.obterDadosArquivos()
        const dadosFiltrados = dados.filter(items => id ? (items.id === id): true)
        return dadosFiltrados
    }


}

module.exports = new DataBase()