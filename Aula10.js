//Estrutura de laço de repetição While
const prompt = require('prompt-sync')();

//EXEMPLO 1
let resposta = 'S';
while (resposta == 'S') {
console.log('Você está dentro do bloco');
resposta = prompt('Deseja continuar? S/N')
}
console.log('FIM')

//EXEMPLO 2
let senhaSecreta = 'SENAI'
let senhaDigitada
while ( senhaSecreta != senhaDigitada ) {
console.log('Descubra a senha secreta!')
senhaDigitada = prompt('Qual é a senha? ')
}
console.log('FIM')

//EXEMPLO 3
let contador = 1;
while (contador <= 5) {
console.log(`O contador está no n° ${contador} `);
contador++; //contador = contador + 1;
}

//EXEMPLO 4
//Posso deixar o meu laço executando sem uma condição específica
// com while (true) e encerrar o loop com o comando break
let total = 0;
let qtde = 0;

while (true) {
let valor = Number(prompt('Digite o valor do produto (e para encerrar): '));

if (valor = 0) {
break;
}else {
total = valor + total;
qtde++;
}
}
console.log(`Você comprou no total ${qtde} produtos`);
console.log(`Valor total da compra R$ ${total.toFixed(2)}`);



