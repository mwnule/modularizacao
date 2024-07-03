// Primeiro exercício
// Crie um script que peça ao usuário a quantidade de
// notas que será calculado a média, após saber a quantidade
// solicitar as notas referente a sua quantidade. Criar um array
// com as notas e realizar média de forma dinâmica.

// Passos a serem seguidos:
// 1. Solicitar ao usuário a quantidade de notas a serem calculadas
//      - O que fazer com essa informação? Devo torna-lá dinâmica?
// 2. Solicitar notas 
//      - Fazer uma verificação de if e else para saber se a quantidade de notas com as notas solicitadas batem (Não consegui fazer isso, mas planejo fazer depois)
// 3. Criar um array com as notas
// 4. Calcular média de forma dinâmica
//      - Para isso devo usar função, então revise como funcionam
// Lembre-se: 
// - Utilizar prompt-sync
//      - ps: lembre-se de iniciar o comando
// - Utilizar função

const prompt = require('prompt-sync')();

// Inicialmente pergunta ao usuário qual a quantidade de notas a serem calculadas e converte a variável armazenada em number
let quantidadeNotasStr = prompt("Qual a quantidade de notas a serem calculadas? ").trim();
let quantidadeNotas = parseInt(quantidadeNotasStr)

// Solicita ao usuário as notas, separadas por espaços para que sejam separadas por índice, e as armazebna em um array
let notasInformadas = prompt("Pode informar quais são as notas, separando-as por espaços? ")
let notas = notasInformadas.split(' ').map(Number)
// .map(Number) é essencial para que transforme o resultado armazenado em número, pois prompt converte a informação dada do usuário automaticamnet em string

// Função para calcular a soma de todas as notas, o que será essencial para fazer a média posteriormente
function calculoTodasNotas(notas) {
    let calculo = 0;

    for (let i = 0; i < notas.length; i++) {
        calculo += notas[i]
    }
    return calculo
}
// Chama a função calculoTodasNotas e transforma seu resultado em uma variável
let somaDasNotas = calculoTodasNotas(notas)

// função criada para o calculo de média
// ps: sempre colocar return para o código dar certo!
function calcularMedia(somaDasNotas, quantidadeNotas) {
    return somaDasNotas / quantidadeNotas
}
// Chama a função calcularMedia e transforma seu resultado em uma variável
let mediaTotal = calcularMedia(somaDasNotas, quantidadeNotas)


console.log(`A quantidade de notas é: ${quantidadeNotas}`)
console.log(`As notas informadas são: ${notasInformadas}`)
console.log(`A média total é: ${mediaTotal}`)

