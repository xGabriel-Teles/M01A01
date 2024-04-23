//  Atividade 01 -- Exercicio 16
// Escreva um algoritmo para imprimir os 50 primeiros número primos maiores que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let contador = 100;
let qtdPrimos = 1;

console.log('=============================================================================');
while (qtdPrimos <= 50) {
    let divisor = 0;
    let qtdDivisoes = 0;
    while (divisor <= contador) {
        if (contador % divisor === 0) {
            qtdDivisoes++
        }
        divisor++
    }

    if (qtdDivisoes === 2) {
        console.log(`${qtdPrimos}º número primo após o número 100 é: ${contador}`)
        qtdPrimos++
    }
    contador++
}
console.log('=============================================================================');