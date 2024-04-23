//  Atividade 01 -- Exercicio 09
// Escreva um algoritmo que leia o código de origem de um produto e imprima a região do mesmo, conforme a tabela abaixo:
// 1- SUL          5  OU  6  - NORDESTE
// 2- NORTE        7, 8 OU 9 - SUDESTE
// 3- LESTE        10 ATÉ 20 - CENTRO-OESTE
// 4- OESTE        25 ATÉ 50 - NORDESTE
// FORA DOS INTERVALOS - PRODUTO IMPORTADO


const prompt = require('prompt-sync')();

// Área de entrada:
console.log('=============================================================================');
let codOrigem = parseInt(prompt('Digite o código de origem do produto: '));
let regiaoProduto;

// Área de processamento: 
switch (codOrigem) {
    case 1:
        regiaoProduto = 'Sul';
        break;
    case 2:
        regiaoProduto = 'Norte';
        break;
    case 3:
        regiaoProduto = 'Leste';
        break;
    case 4:
        regiaoProduto = 'Oeste';
        break;
    case 5: case 6:
        regiaoProduto = 'Nordeste';
        break;
    case 7: case 8: case 9:
        regiaoProduto = 'Sudeste';
        break;
    case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20:
        regiaoProduto = 'Centro-Oeste';
        break;
    case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49: case 50:
        regiaoProduto = 'Noroeste';
        break;
    default:
        regiaoProduto = 'produto importado';
        break;
}

// Área de saída: 
if (regiaoProduto === 'produto importado') {
    console.log();
    console.log(`Este produto não é nacional, é um ${regiaoProduto}.`);
    console.log('=============================================================================');
} else {
    console.log();
    console.log(`O produto é da região ${regiaoProduto}.`);
    console.log('=============================================================================');
}