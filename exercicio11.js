//  Atividade 01 -- Exercicio 11
//  Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. 
//  Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR.
//  O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.


const prompt = require('prompt-sync')();
let encerrar = 0;

do {
    let numX = parseInt(prompt('Digite um número: '));

    if (isNaN(numX - 3)) {
        console.log('Você não digitou um número.');
        encerrar++
    } else {
        if (numX < 0) {
            if ((numX % 2) === 0) {
                console.log('O número digitado é negativo e par!');
                encerrar++
            } else {
                console.log('O número digitado é negativo e ímpar!');
                encerrar++
            }
        } else {
            if ((numX % 2) === 0) {
                console.log('O número digitado é par!');
            } else {
                console.log('O número digitado é ímpar!');
            }
        }
    }
} while (encerrar === 0);