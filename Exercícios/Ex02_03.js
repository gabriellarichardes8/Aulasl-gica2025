//Exercício 3
const prompt = require('prompt-sync')();

let n1 = Number(prompt('Digite um número inteiro: '));

if (n1 % 2 == 0) {
console.log('é par');
} else {
console.log('é ímpar');
}