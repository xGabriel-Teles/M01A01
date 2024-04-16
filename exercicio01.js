//  Atividade 01 -- Exercicio 01
//  Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.


const prompt = require('prompt-sync')();

let temperaturaCelsius = parseInt(prompt('Digite a temperatura em Celsius: '));
let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

console.log(`Você digitou ${temperaturaCelsius}°C.`);
console.log(`A temperatura em Fahrenheit é: ${temperaturaFahrenheit}°F`);