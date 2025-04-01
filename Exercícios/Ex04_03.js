const prompt = require('prompt-sync')();

let totalPar = 0;
let totalImpar = 0;
let somaPar= 0;
let somaImpar = 0

while (true) {
let num = Number(prompt('Digite um número {0 para parar}: '));

    if (num == 0) {
        break;
    }
    if (num % 2 == 0){ 
        totalPar ++  
        somaPar = somaPar + num; //somaPar += valor
} else{
        totalImpar ++
        somaImpar = somaImpar + num;
    }
}
console.log(`Você digitou ${totalPar} n° pares, somados resultou em ${somaPar} `);
console.log(`Você digitou ${totalImpar} n° ímpares, somados resultou em ${somaImpar}`);

