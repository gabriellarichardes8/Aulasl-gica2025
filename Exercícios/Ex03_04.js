//Lista de exercícios
const prompt = require('prompt-sync')();

let mes = prompt('Digite o nome de um mês: ')
if (mes == 'janeiro' || mes == 'março' || mes == 'maio' || mes == 'maio' || mes == 'julho' || mes == 'agosto' || mes == 'outubro' || mes == 'dezembro') {
console.log('Esse mês tem 31 dias');
} else if (mes == 'abril' || mes == 'junho' || mes == 'setembro' || mes == 'novembro') {
console.log('Esse mês tem 30 dias');
} else if (mes == 'fevereiro') {
console.log('Esse mês tem 28 dias');
}