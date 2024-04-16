//  Atividade 01 -- Exercicio 05
// Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a  média calculada seja menor que 6,0


const prompt = require('prompt-sync')();

// Área de entrada: 
let nota1 = parseFloat(prompt('Digite a nota da primeira avaliação de 0 a 10: '));
let nota2 = parseFloat(prompt('Digite a nota da segunda avaliação de 0 a 10: '));

// Área de processamento: 
let mediaSemestral = ((nota1 + nota2) / 2);

// Área de saída: 
if (nota1 <= 10 && nota2 <= 10 && nota1 >= 0 && nota2 >= 0) {
    if (mediaSemestral >= 6) {
        console.log(`PARABÉNS! Você foi aprovado, sua média no semestre foi de ${mediaSemestral}`);
    } else {
        console.log(`ESTUDE MAIS! Você foi reprovado, sua média no semestre foi de ${mediaSemestral}`);
    }
} else if (nota1 < 0 || nota2 < 0){
    console.log('As notas não podem possuir valor negativo.');
} else {
    console.log('As notas não podem possuir valor superior a 10.');
}