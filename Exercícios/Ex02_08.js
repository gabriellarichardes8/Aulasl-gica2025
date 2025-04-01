//Exercício 8
const prompt = require('prompt-sync')();

let valor = Number(prompt('Quanto vendeu no mês?  '));

if (valor > 5000) {
let maior = valor * (5 / 100)
console.log(`Sua comissão é de ${maior}`);
} else { let menor = valor * (3 / 100)
console.log(`Sua comissão é de ${menor}`);
}