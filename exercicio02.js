//  Atividade 01 -- Exercicio 02
//  Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. 
//  Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.


const prompt = require('prompt-sync')();

console.log('==============================================================================================================');
let eleitoresTotais = parseInt(prompt('Digite a quantidade de eleitores totais do município: '));
let votosBrancos = parseInt(prompt('Digite a quantidade de votos em branco: '));
let votosNulos = parseInt(prompt('Digite a quantidade de votos nulos: '));
let votosValidos = parseInt(prompt('Digite a quantidade de votos válidos: '));

if ((votosBrancos + votosNulos + votosValidos)> eleitoresTotais){
    console.log('Os votos somados não podem ser maiores que a quantidade total de eleitores do município.');
} else {
    // Formula do cálculo de porcentagem = (Número de votos / Eleitores totais) x 100
    console.log(`\nO percentual de votos em branco em relação a quantidade de eleitores totais do município é: ${((votosBrancos / eleitoresTotais)*100).toFixed(2)}%`);
    console.log(`O percentual de votos nulos em relação a quantidade de eleitores totais do município é: ${((votosNulos / eleitoresTotais)*100).toFixed(2)}%`);
    console.log(`O percentual de votos válidos em relação a quantidade de eleitores totais do município é: ${((votosValidos / eleitoresTotais)*100).toFixed(2)}%`);
    
    if (votosBrancos + votosNulos + votosValidos === eleitoresTotais) {
        console.log(`\nOs eleitores deste município estão de parabéns, 100% dos eleitores votaram!`);
        console.log('==============================================================================================================');
    } else {
        console.log(`\nHá eleitores neste município que não votaram, o percentual de pessoas que votaram neste município é de ${
            // Formula do cálculo de porcentagem = (Soma do número de cada grupo de votos / Eleitores totais) x 100
            (((votosBrancos + votosNulos + votosValidos) / eleitoresTotais) * 100).toFixed(2)
        }%`);
        console.log('==============================================================================================================');
    }
}
