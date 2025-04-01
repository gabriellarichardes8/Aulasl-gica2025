//Exercício 8
const prompt = require('prompt-sync')();

let altura = Number(prompt('Qual é a altura em metros? '));
let largura = Number(prompt('Qual é a largura em metros? '));
let area = (altura * largura);
let tinta = (area / 2);
console.log(`A altura é de ${altura} a largura é de ${largura}, a área com os dois valores é de ${area} e a quantidade de tinta para pintar-lo é de ${tinta}`);