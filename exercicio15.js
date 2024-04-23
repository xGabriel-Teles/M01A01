//  Atividade 01 -- Exercicio 15
//  Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

const prompt = require('prompt-sync')();

let somaNumeros = 0;
let somaPesos = 0;
let quantidadeNumeros = 0;

console.log('=============================================================================');
let numero = parseFloat(prompt('Digite um número decimal (utilize 0 para parar): '));
let peso;

while (numero !== 0) {

    if (isNaN(numero - 1)) {
        console.log('Digite apenas números.');
    } else {
        peso = parseFloat(prompt('Digite o peso correspondente a esse número: '));
        if (isNaN(peso - 1)) {
            console.log('Digite apenas números.');
        } else {
            somaNumeros += numero * peso;
            somaPesos += peso;
            quantidadeNumeros++;
        }
    }
    numero = parseFloat(prompt('Digite um número decimal (utilize 0 para parar): '));
}

if (quantidadeNumeros === 0) {
    console.log('Nenhum número foi fornecido.');
} else {
    let mediaPonderada = somaNumeros / somaPesos;
    console.log();
    console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
    console.log('=============================================================================');
}