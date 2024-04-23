//  Atividade 01 -- Exercicio 08
//  Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.


const prompt = require('prompt-sync')();

// Área de entrada:
console.log('=============================================================================');
console.log('Digite dois números diferentes, o sistema imprimirá eles em ordem crescente.');
let num1 = prompt('Escreva o primeiro número: ');
let num2 = prompt('Escreva o segundo número: ');

// Área de saída: 
if (num1 === num2){
    console.log();
    console.log('Os números digitados são iguais.');
} else {
    if(num1 > num2){
        console.log();
        console.log(`Os números em ordem crescente são: ${num2} e ${num1}`);
        console.log('=============================================================================');
    } else {
        console.log();
        console.log(`Os números em ordem crescente são: ${num1} e ${num2}`);
        console.log('=============================================================================');
    }
}
