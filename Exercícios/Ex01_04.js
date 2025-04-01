//Exercício 4
const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Qual é a 1ª nota? '));
let nota2 = Number(prompt('Qual é a 2ª nota? '));
let media = (nota1 + nota2) / 2;
console.log(`A média das notas ${nota1} e ${nota2} é de ${media}`);