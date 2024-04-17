//  Atividade 01 -- Exercicio 06
// Ler três valores para os lados de um triângulo: A, B e C. 
// Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// ● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// ● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// ● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

// Área de entrada: 
let ladoA = parseInt(prompt('Digite o primeiro lado do triângulo: '));
let ladoB = parseInt(prompt('Digite o segundo lado do triângulo: '));
let ladoC = parseInt(prompt('Digite o terceiro lado do triângulo: '));
let tipoTriangulo;

// Área de processamento: 
if (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoA + ladoC > ladoB) {
    console.log('É possível formar um triângulo com esses valores escolhidos para cada lado!');

    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = "TRIÂNGULO EQÜILATERO";
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        tipoTriangulo = "TRIÂNGULO ESCALENO";
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        tipoTriangulo = "TRIÂNGULO ISÓSCELES";
    }

    // Área de saída:
    console.log(`Com os valores informados, você formou um ${tipoTriangulo}.`);
} else {
    console.log('Não é possível formar um triangulo com estes números.');
}