const prompt = require('prompt-sync')();

let inicio = Number(prompt('Digite o primeiro n°: '));
let fim = Number(prompt('Digite o último n°: '))
let passo = Number(prompt('Digite quantos passos vai pular: '))
for (let contador = inicio; contador <= fim; contador += passo) {
    console.log(`Valores são igual á ${contador}`);
}