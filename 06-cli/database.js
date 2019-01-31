const fs = require('fs')
const util = require("util")

const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)


class DataBase {

    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }

    async obterDadosArquivos(){
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf-8')
        return JSON.parse(arquivo.toString())
    }

   async escreverArquivo(dados){
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivos();
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        const heroiComId = {
          ...heroi,
          id,
        };
        
        return await this.escreverArquivo([...dados, heroiComId]);
    }

    async listar(id){
        const dados = await this.obterDadosArquivos();
        // se nao passar o id, traz tudo
        return dados.filter(item => (id ? item.id == id : true));
    }

    async remove(id) {
        if (!id) {
          await this.escreverArquivo([]);
          return true;
        }
    
        const dados = await this.obterDadosArquivos();
    
        const indice = dados.findIndex(item => item.id === parseInt(id));
        if (indice === -1) {
          throw Error('heroi não existe!');
        }
        const atual = dados[indice];
        dados.splice(indice, 1);
        await this.escreverArquivo(dados);
        return true;
      }

    async atualizar (id,modificao){
        const dados = await this.obterDadosArquivos()
        const indice = dados.findIndex(items => items.id === parseInt(id))
        if(indice === -1){
            throw Error("heroi não existe!")
        }

        const dadosAtual = dados[indice]

        const objetoAtualizado = {
            ...dadosAtual,
            ...modificao
        }

        dados.splice(indice,1)

        // console.log(`DADOS ${JSON.stringify(dados)}, E DADOS ATUALIZADO ${JSON.stringify(objetoAtualizado)}`)
        return await this.escreverArquivo([...dados,objetoAtualizado])
    
    }  

}

module.exports = new DataBase()