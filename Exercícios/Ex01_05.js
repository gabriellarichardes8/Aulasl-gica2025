//Exercício 5
const prompt = require('prompt-sync')();

//Lendo o valor em metros
let metros = Number(prompt('Digite um número em metros: '));
//Convertendo para centímetros
let centimetros = (metros * 100);
//Convertendo para milímetros
let milimetros = (metros * 1000);
//Convertendo em km
let km = (metros / 1000);
//Exibindo o valor
console.log(`O valor do n° é de ${metros}m convertido para centimetros é ${centimetros}cm convertido para milimetros é ${milimetros}mm convertido para km é ${km}km`);