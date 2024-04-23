//  Atividade 01 -- Exercicio 15
//  Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.

// const prompt = require('prompt-sync')();


// function somaMatriz (matriz){
//     let soma = 0;
//     for (let i=0; i < matriz.length; i++){
//         for (let j=0; j < matriz[i].length; j++){
//             soma += matriz[i][j];
//         }
//     }
//     return soma;
// }
// console.log(somaMatriz([[3,2],[3,7]]));


// Voce tem uma lista de objetos que representam diferentes 
// tipos de veiculos e suas caracteristicas. seu primeiro objetivo é usar 
// for in para listar todas as propriedades e valores de cada veiculo 
// depois, utilizar for of para listar apenas os modelos dos veiculos

// const veiculos = {
//     cor: 'preto', 
//     ano: 2024, 
//     marca: 'Fiat',
//     modelo: 'uno',
//     automatico: true,
// }
// let listaVeiculos = [];

// for (let veiculo in veiculos) {
//     console.log(`A ${veiculo} é : ${veiculos[veiculo]}`)
//     listaVeiculos.push(`${veiculo}: ${veiculos[veiculo]}`)
// }
// for (let veiculo of listaVeiculos) {
//     console.log(veiculo)
// }

listaNumeros = [3, 6, 9];
soma = 0;
listaNumeros.forEach((value) => {
    console.log(`Multiplicação por 2: ${value*2}`);
    soma += value;
});
console.log(soma)