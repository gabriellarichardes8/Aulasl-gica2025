const prompt = require('prompt-sync')();

//Operações com variáveis
let nr1 = Number(prompt('Qual é o primeiro n°:'));
let nr2 = Number(prompt('Qual é o segundo n°:'));
let soma = nr1 + nr2;
console.log(`A soma entre ${nr1} e ${nr2} é ${soma}`);

let subtracao = nr1 - nr2;
console.log(`A subtracao entre ${nr1} e ${nr2} é ${subtracao}`);

let multiplicacao = nr1 * nr2;
console.log(`A multiplicacao entre ${nr1} e ${nr2} é ${multiplicacao}`);

let divisao = nr1 / nr2;
console.log(`A divisao entre ${nr1} e ${nr2} é ${divisao}`);

let exponenciacao = nr1 ** nr2;
console.log(`A exponenciacao entre ${nr1} e ${nr2} é ${exponenciacao}`);



let valor = Number(prompt('Qual é o valor do celular?'));
let Desconto = Number(prompt('Qual é o desconto em % ?'));
valor = valor - (valor * Desconto / 100); 
console.log(`Promoção celular com R$ ${Desconto} de desconto, por apenas R$ ${valor}`);

//Reatribuição de valor da variável
var numero = 4 / 2;
numero = numero ** 2;
numero = numero * (50 - 20);
console.log('O valor é', numero);
console.log(`O valor é: ${numero}`);

//Calculando o dobro e a metade de um numero
let Numero = Number(prompt('Qual é o Numero?'));
let dobro = Numero * 2;
let metade = Numero / 2; 
console.log(`O dobro do numero é ${dobro} e a metade é ${metade}`)


let horastrabalhadas = 8
let diastrabalhados = 15
let projeto = horastrabalhadas * diastrabalhados
let valorhora = 100
let valortotalprojeto = projeto * valorhora
console.log(`Deveria cobrar ${valortotalprojeto} reais`);