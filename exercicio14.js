//  Atividade 01 -- Exercicio 14
// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.


const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;
let numero;


console.log('=============================================================================');
while (numero !== 0) {
    numero = parseFloat(prompt('Digite um número (ou 0 para sair):'));

    if (isNaN(numero - 1)) {
        console.log('Você não digitou um número, repita o procedimento.');
    }  else if (numero !== 0){
        soma += numero;
        quantidade++;
    }
}

if (quantidade === 0) {
    console.log('Nenhum número foi digitado.');
    console.log('=============================================================================');
} else {
    let media = soma / quantidade;
    console.log();
    console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
    console.log('=============================================================================');
}