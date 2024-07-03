// Primeiro exercício
// Crie um script que peça ao usuário a quantidade de
// notas que será calculado a média, após saber a quantidade
// solicitar as notas referente a sua quantidade. Criar um array
// com as notas e realizar média de forma dinâmica.

// Passos a serem seguidos:
// 1. Solicitar ao usuário a quantidade de notas a serem calculadas
//      - O que fazer com essa informação? Devo torna-lá dinâmica?
// 2. Solicitar notas 
//      - Fazer uma verificação de if e else para saber se a quantidade de notas com as notas solicitadas batem
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
let notas = notasInformadas.split(' ')

function calculoTodasNotas ()

function calcularMedia(notasInformadas, quantidadeNotas) {

}



console.log(quantidadeNotas)
console.log(notas)
