//Lista de exercícios
const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite o ano do seu nascimento: '));
let ano = Number(prompt('Digite o ano em que você está: '));
let nasci = ano - idade
if (nasci <= 10) {
console.log('Você é criança');
} else if (nasci >= 11 && nasci <= 17) {
console.log('Você é adolescente');
} else if (nasci >= 18 && nasci <= 59) {
console.log('Você é adulto');
} else if (nasci >= 60) {
    console.log('Você é idoso');
}