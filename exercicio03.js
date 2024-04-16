//  Atividade 01 -- Exercicio 03
//  Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.


const prompt = require('prompt-sync')();

// Área de entrada: 
let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));
let num3 = parseInt(prompt('Digite o terceiro número: '));
let num4 = parseInt(prompt('Digite o quarto número: '));

// Área de processamento: 
num4 = num4 + num1 + num2 + num3;
num1 += 25;
num2 *= 3; 
num3 *= (0.12).toFixed(2);


// Área de saída: 
console.log();
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);