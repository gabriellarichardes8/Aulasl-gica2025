//Exercício 10
const prompt = require('prompt-sync')();

let km = Number(prompt('Quantidade de km percorrido pelo carro alugado: '));
let dias = Number(prompt('Quantidade de dias que o carro alugado: '));
let ValorTotal = (km * 0.15) + (dias * 60);

console.log(`Você pagará R$${ValorTotal}`);