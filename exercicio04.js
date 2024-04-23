//  Atividade 01 -- Exercicio 04
//  Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: 
//  ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).


const prompt = require('prompt-sync')();

// Área de entrada: 
let nota1 = parseFloat(prompt('Digite a nota da primeira avaliação de 0 a 10: '));
let nota2 = parseFloat(prompt('Digite a nota da segunda avaliação de 0 a 10: '));

// Área de processamento: 
// Cálculo de média = (1º nota + 2º nota) / quantidade de notas escritas (2)
let mediaSemestral = ((nota1 + nota2) / 2);

// Área de saída: 
// Condicional para verificar se o input do usuário está na regra estabelecida
if (nota1 <= 10 && nota2 <= 10 && nota1 >= 0 && nota2 >= 0) {
    if (mediaSemestral >= 6) {
        console.log(`PARABÉNS! Você foi aprovado, sua média no semestre foi de ${mediaSemestral}`);
    }
} else if (nota1 < 0 || nota2 < 0) {
    console.log('As notas não podem possuir valor negativo.');
} else {
    console.log('As notas não podem possuir valor superior a 10.');
}