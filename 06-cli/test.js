const assert = require('assert')

const DEFAULT_ITEM_CADASTRAR = {
    nome: "Flash",
    poder: "Speed",
    id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
    nome: "Lanterna Verde",
    poder: "Raio Verde",
    id: 2
}

 const database = require('./database')

describe("Suite de manipulação de Herois", ()=>{

    before( async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })

    it("Deve pesquisar um heroi usando arquivo", async () =>{
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        assert.deepEqual(resultado,expected)

    })

    it("Deve cadastar um heroi, usando arquivos", async () =>{
        const expected = DEFAULT_ITEM_CADASTRAR
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
        const [atual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)

        assert.deepEqual(atual, expected)

    })

    it("Deve remover um heroi dos arquivos", async () => {
        const expected = true
        const result = await database.remove(DEFAULT_ITEM_CADASTRAR.id)

        assert.deepEqual(expected,result)

    })

    it.only("Deve atualizar um heroi dos arquivos", async () => {
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            nome: "Batman",
            poder: "Dinheiro"
           
        }

        const dadosAtual = {
            nome: "Batman",
            poder: "Dinheiro"
        }

        await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, dadosAtual)
        const [result] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
        assert.deepEqual(result,expected)

    })

})