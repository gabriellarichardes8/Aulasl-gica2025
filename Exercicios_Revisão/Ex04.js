const prompt = require('prompt-sync')();

let hora = prompt('quanto você ganha por hora?: ')
let horasTrabalhadas = prompt('quantas horas você trabalha por mês?: ')
let valor = hora * horasTrabalhadas 
console.log(`Você recebe cerca de R$ ${valor} por mês`);
