//Exercício 9
const prompt = require('prompt-sync')();

let preço = Number(prompt('Qual é o preço do produto? '));
let porcentagem = (5/100)
let desconto = (preço - porcentagem)
console.log(`O preço é de ${preço}, ele - ${porcentagem} é igual a ${desconto}`);