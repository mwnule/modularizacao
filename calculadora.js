const soma = require("./soma");
const subtracao = require("./subtracao");

const prompt = require("prompt-sync")();

let numero1 = +prompt("Fale o primeiro número: ")
let numero2 = +prompt("Fale o segundo número: ")
let operacao = prompt("+ ou -? ")

if (operacao == "+") {
    console.log(soma(numero1, numero2));
} else if (operacao == "-") {
    console.log(subtracao(numero1, numero2))
}
