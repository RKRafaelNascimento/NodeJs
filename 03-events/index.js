// EventEmitter
//Ações continuas
//Ex: Quando um arquivo for renomeado salve um log no banco de dados
//Promise captura uma unica vez o EventEmitter é para ações continuas

// const EventEmitter = require('events')
// class nomeEvent extends EventEmitter {

// } 

// const meuEmissor = new nomeEvent()

// const nomeEvento = 'usuario:click'

// meuEmissor.on(nomeEvento, (click) => {
//     console.log('um usuario clicou', click)
// })

// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvent, 'no botao ok')

// let count = 0;
// setInterval(() =>{
//     meuEmissor.emit(nomeEvento, 'no ok'+ (count++))
// },1000)

//Escutando evento  de digitar no terminal!
const stdin = process.openStdin()
stdin.addListener('data', (click) => {
    console.log(`Você digitou: ${click.toString().trim()}`)
})