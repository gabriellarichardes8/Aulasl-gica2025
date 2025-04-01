//Exercício 7
const prompt = require('prompt-sync')();

let velocidade = Number(prompt('Digite a velocidade do carro:  '));

if (velocidade > 80) {
let multa = (velocidade - 80) * 7
console.log(`Você será multado em ${multa}`);
} else {
console.log('Não foi multado');
}