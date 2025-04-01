//Exercício 5
const prompt = require('prompt-sync')();

let ano = Number(prompt('Qual é o seu ano de nascimento?  '));

if (ano > 2007) {
console.log('Menor de idade');
} else {
console.log('Maior de idade');
}