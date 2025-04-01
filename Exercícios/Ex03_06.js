//Lista de exercícios
const prompt = require('prompt-sync')();

let salario = Number(prompt('Digite o seu salário: '))
if (salario <= 2000) {
console.log(`Você ganhou com o aumento R$ ${salario * 12 / 100}`);
} else if (salario <= 4000) {
console.log(`Você ganhou com o aumento R$ ${salario * 10 / 100}`);
} else if (salario > 4000) {
console.log(`Você ganhou com o aumento R$ ${salario * 8 / 100}`);
}