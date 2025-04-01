const prompt = require('prompt-sync')();

//Estrutura condicional composta e encadeada
//Operadores Lógicos
// && - e
// || - ou
// ! - não

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); //False pq apenas 2 condição F
console.log(a > 1 && b < 2); //False pq apenas 1 condição é V
console.log(a > 1 && b < 4); //True pq 2 condição é V
console.log(a > 1 && b < 4 && c > 4); //True todas condições V
console.log(a > 1 && b < 4 && c > 5); //False

console.log(a > 2 || b < 2); //False pq nenhuma condição é V
console.log(a > 1 || b < 2); //True pq tem pelo menos 1 V
console.log(a > 1 || b < 4); //True pq pelo menos 1 V
console.log(a > 1 || b < 4 && c > 4); //True
console.log(a > 1 && b < 4 || c > 4); //True


//Praticando
let altura = Number(prompt('Digite sua altura:'));
let peso = Number(prompt('Digite seu peso:'));
let imc = peso / (altura ** 2);
if (imc < 18.5) {  
console.log('Você está abaixo do peso ideal');
} else if (imc > 18.5 && imc < 24.5) {
console.log('Você está no peso ideal');
} else if (imc > 25 && imc < 29.9) {
console.log('Você está sobrepeso');
} else if (imc > 30) {
console.log('Você está obeso');
}

let lado1 = Number(prompt('Receba o 1° lado:'));
let lado2 = Number(prompt('Receba o 2° lado:'));
let lado3 = Number(prompt('Receba o 3° lado:'));
if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {  
console.log('Seu triângulo é equilátero');
} if (lado2 != lado3 && lado3 != lado1 && lado1 != lado2) {
console.log('Seu triângulo é escaleno ');
//} else if ((lado1 == lado2 & lado2 != lado3 & lado3 != lado1 ) 
}else {console.log('Seu triângulo é isóceles')
}

//Utilizando ||
let vendas = Number(prompt('Digite o valor das vendas: '))
let horasSema = Number(prompt('Digite a quantidade de horas trabalhadas semanalmente: '))
if (vendas > 5000 || horasSema > 40) {   
console.log('Você tem direito ao bônus ');
} else {console.log('Você não tem direito ao bônus ');
}

let algoritmo = prompt('Digite uma letra: ')
if (algoritmo == 'a' || algoritmo == 'e' || algoritmo == 'i' || algoritmo == 'o' || algoritmo == 'u') {
console.log('A letra é uma vogal');
} else {console.log('A letra é uma consoante');
}
