//  Atividade 01 -- Exercicio 13
// Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// 3 x N = 3N


const prompt = require('prompt-sync')();

console.log('=============================================================================');

for (let i = 0; i < 5; i++){
    let N = parseInt(prompt('Digite um número (N) para exibir a tabuada de 1 até N: '));
    for (let i2 = 1; i2 <= N; i2++ ){
        console.log(`${i2} x ${N} = ${i2 * N} `);
    }
    console.log();
}
console.log('=============================================================================');