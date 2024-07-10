// 02 - Solicite ao usuário um número e calcule o seu fatorial.

// Passos:
//  1. Solicitar um número ao usuário, transformar isso em uma variável e converter em Number 
//  2. Criar uma função para fatoração do número
//      - Criar um laço de repetição
//          - O laço de repetição deve ter uma condicional para a fatoração de números primos
//      - Armazenar os números da fatoração em um array
// 3. Informar ao usuário o número fatorado

// Como funciona a fatoração?
// 


const prompt = require('prompt-sync')();

let numeroSrt = prompt("Informe um número: ")
let numero = parseInt(numeroSrt)

function fatoracao(numero) {
    const numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    let divididos = [];
    for (let i = numero; i >= 1; i--) {
        if (numero % numerosPrimos == 0)
    {
        
    }} 

}




