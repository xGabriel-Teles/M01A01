//  Atividade 01 -- Exercicio 12
// Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.


let contagemFinal = 0;

for (let i = 1000; i < 2000; i++){
    if ((i % 11) === 5){
        console.log(i)
        contagem++
    }
}
console.log(`Entre 1000 e 1999, há ${contagemFinal} números que divididos por 11, dão resto igual a 5.`)