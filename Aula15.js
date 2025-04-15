//Escopo de variáveis
//Variável global pode ser acessada em qualquer local
//Variável local só pode ser acessada dentro do bloco

//Utilizando variáveis local
function NomeEscola(){
    escola = 'SESI'
    console.log(`Valor dentro da função: ${escola}`);
}

var escola = 'SENAI';
console.log(`Valor fora da função: ${escola}`);
NomeEscola();
console.log(`Valor após a função: ${escola}`);


//Utilizando variáveis global
var escola2 = 'SENAI';

function NomeEscola2(){
    escola2 = 'SESI'
    console.log(`Valor dentro da função: ${escola2}`);
}

console.log(`Valor fora da função: ${escola2}`);
NomeEscola();
console.log(`Valor após a função: ${escola2}`);


//Documentando funções
/** 
 * Soma de dois numeros
 *@param {number} a - Primeiro número
 *@param {number} b - Segundo número
 *@returns {number}  - Soma dos dois números
*/
 function Soma (a, b){
    return a + b;
}
Soma()

