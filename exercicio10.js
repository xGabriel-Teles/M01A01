//  Atividade 01 -- Exercicio 10
// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.


const prompt = require('prompt-sync')();

// Área de entrada:
let num1 = parseInt(prompt('Digite o número desejado: '));
console.log();


// Área de processamento e saída: 
for (let i= 0; i < 10; i++) {
    console.log(`O número digitado foi ${num1}.`);
}