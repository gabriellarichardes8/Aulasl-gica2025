//Exercício 6
const prompt = require('prompt-sync')();

let n1 = Number(prompt('Qual é o 1° número? '));
let n2 = Number(prompt('Qual é a 2° número? '));

if (n1 == n2) {
console.log('Os números são iguais');
} else {
console.log('Os números são diferentes');
}