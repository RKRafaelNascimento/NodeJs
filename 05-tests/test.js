// Desenvolvimento orientado a test

const assert = require("assert")
const service = require("./service")

describe("Start Tests", ()=>{
    it("Deve buscar R2-D2 com o formado correto", async() =>{
        const expected = [{nome: "R2-D2", peso: '96'}]
        const nomeBase = 'r2-d2'

        const result = await service.obterPessoas(nomeBase)
      
        assert.deepEqual(result,expected)
    })
})