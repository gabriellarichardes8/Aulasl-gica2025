const prompt = require('prompt-sync')();


let totalPar = 0;
let totalImpar = 0;
let somaPar = 0;
let somaImpar = 0
for (let contador = 1; contador <= 5; contador++) {
    let num = Number(prompt('Digite um número: '));

    if (num % 2 == 0) {
        totalPar++
        somaPar = somaPar + num;
    } else {
        totalImpar++
        somaImpar = somaImpar + num;
    }
}
console.log(`Você digitou ${totalPar} n° pares, somados resultou em ${somaPar} `);
console.log(`Você digitou ${totalImpar} n° ímpares, somados resultou em ${somaImpar}`);
