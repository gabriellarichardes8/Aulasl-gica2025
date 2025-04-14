const prompt = require('prompt-sync')();
//Iteração sobre nossos vetores (arrays / listas)

//Vetor         0        1          2        3
let frutas = ['Maça', 'Banana', 'Abacaxi', 'Uva'];
//Para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
    console.log(`A fruta da posição ${x} é ${frutas[x]}`);
}
console.log('Fim');

//Iterando sobre uma lista usando o for of
let listasJogadores = ['Pelé', 'Maradona', 'Messi', 'Ronaldo'];
for (let jogador of listasJogadores) {
    console.log(`O jogador é ${jogador}`);
}

//Exemplo
let n = [1, 2, 3, 4, 5];
let soma = 0;
for (let numero of n) {
    console.log(`O número é ${numero}`)
    soma = numero + soma

}
console.log(soma);

//Verificando se um elemento existe em um array usando includes()
let vogais = ['a', 'e', 'i', 'o', 'u'];
let consoantes = ['b', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let letraParaVerificar = prompt('Digite uma letra: ');
if (vogais.includes(letraParaVerificar.toLowerCase())) {
console.log(`A letra ${letraParaVerificar} é uma vogal`);
} else if (consoantes.includes(letraParaVerificar.toLowerCase())) {
    console.log(`A letra ${letraParaVerificar} é uma consoante`)
 } else if  (num.includes(letraParaVerificar)) {
    console.log(`${letraParaVerificar} é um número`)
 } else  {
    console.log(`${letraParaVerificar} não é uma letra nem um número`)  
 } 

//Obtendo a posição de um item em um array usando o for of e a função entrist()
//          posição    0        1          2        3
 let listaFrutas =  ['Maça', 'Banana', 'Abacaxi', 'Uva'];
 for (const [pos, fruta] of listaFrutas.entries()) {
    console.log(fruta);
 }

 //Separando uma string utilizando o split()
 let produtos = 'Celular, Notebook, TV, Tablet, Monitor';
 let listaProdutos = produtos.split(',');
 console.log(produtos);
 console.log(listaProdutos);

 //Strings são lista (vetores / arrays) de caracteres
 //            01234
 let escola = 'SENAI'; //['S', 'E', 'N', 'A', 'I']
 console.log(escola[0]); //S
 //S
 //E
 //N
 //A
 //I

 for (let letra of escola) {
    console.log(letra);
 }

 