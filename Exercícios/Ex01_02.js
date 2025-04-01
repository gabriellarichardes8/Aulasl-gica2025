//Exercício 2
const prompt = require('prompt-sync')();

let Inteiro = Number(prompt('Digite um número inteiro: '));
let sucessor = (Inteiro + 1);
let antecessor = (Inteiro - 1);
console.log(` o número inteiro é ${Inteiro} seu sucessor é ${sucessor}  seu antecessor é ${antecessor}`);