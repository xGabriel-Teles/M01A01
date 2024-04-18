//  Atividade 01 -- Exercicio 07
//  As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. 
//  Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

// Área de entrada:
console.log('=============================================================================');
let qtdComprada = parseInt(prompt('Digite quantas maçãs foram compradas: '));
let preco;

// Área de processamento: 
if (qtdComprada >= 12){
    preco = 0.25;
} else if (qtdComprada < 0) {
    console.log('ERRO: O valor digitado não pode ser negativo.');
    preco = 0;
} else {
    preco = 0.30;
}

//Área de saída: 
console.log(`O valor total da compra foi de R$${(preco * qtdComprada).toFixed(2)}.`);
console.log('=============================================================================');