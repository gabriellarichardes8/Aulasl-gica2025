//Estruturas condicionais aninhadas
//Switch case
const prompt = require('prompt-sync')();

let valorCompra = 120;
let clienteVIP = true;

if (valorCompra >= 100) {
if (clienteVIP == true) {
console.log(`Você ganhou R$ ${valorCompra * 10 / 100}`);
}else {
let desconto = valorCompra * 5 / 100;
console.log(`Você ganhou R$ ${desconto} de desconto`);
}
} else {
let restante = 100 - valorCompra;
console.log(`Compre mais R$ ${restante} e ganhe desconto`);
}

//Resolução de problema
let idade = Number(prompt('Digite a sua idade: '));
if (idade < 16) {
console.log('Você não pode votar');
} else if (idade >= 18 && idade < 70) {
console.log('Seu voto é obrigatório');
} else if (idade >= 16 || idade < 18 || idade > 70) {
console.log('Seu voto é facultativo')
}


//Switch case é uma alternativa ao if else
let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite outro número: '))
let op = prompt('Digite um operador (+ - / * **): ')
switch (opn) {
    case '+':                        //if (op == '+')
        console.log(n1 + n2);
        break;
    case '-':
        console.log(n1 - n2);       //else if (op == '-')
        break;
    case '/':
        console.log(n1 / n2)        //else if (op == '/')
        break;    
    case '*':
        console.log(n1 * n2)        //else if (op == '*')
        break;    
    case '**':
        console.log(n1 ** n2)       //else if (op == '**')
        break;    
        
}