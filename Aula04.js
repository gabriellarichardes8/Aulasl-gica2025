const prompt = require('prompt-sync')();

//Criando nossa primeira variável 
//Uma variável serve para amarzenar uma informação/valor
//O memória crie um espaço como nome curso e receba o valor 'Desenvolvimento de Sistemas'
var curso = 'Desenvolvimento de Sistemas';

//Exibindo o conteúdo da variável
console.log('curso'); //Para imprimir uma variável não se coloca entre ' '
console.log(curso); //Jeito correto de usar uma variável
console.log('curso', curso);

//Criando e atribuindo valores a uma variável
var idade = 16; //inteira // integer
var temperatura = 24.5; //real // float
var nome = 'Gabriella'; //string

console.log('Olá, ' + nome + 'você tem ' + idade + 'anos' )
console.log('está cursando ' + curso + 'hoje faz ' + temperatura + '°C');

//Template String
//utilizo a crase ` ` para criar uma string
//para colocar variáveis dentro da string, utilizo ${variável}
console.log(`Olá, ${nome} você tem ${idade} anos
            está cursando ${curso} hoje faz ${temperatura}°C`);

//Declarando uma variável lógica/boolean/boleano (true/false)
var podeDirigir = true;
var estaChovendo = false; 

//Declarando uma variável nula
var escola;


//Exercíco
// Nota1 valido 
// nomeCompleto valido
// Nome Completo invalido
// Média invalido
// console invalido
// _salario valido
// 9dade invalido
// Minha_Variavel valido
// var invalido
// valor$ invalido
// nome-completo invalido
// escola_ valido
// TELEFONE valido
// true invalido 

let cidade = 'Andradina'
var turma = '2°B'
const ano = 2025

console.log(turma);
turma = '3°B' //Reatribuindo o valor de uma variavel
console.log(turma);
//ano = 2026;
//ano = 2026; //Não podemos reatribuir valor a uma constante  

let _nome = 'Gabi';
let _idade = 16;
let _peso = 57.0;
console.log(_nome, _idade, _peso);

//Mostrando no console quais são os tipos de dados
console.log(typeof _nome, typeof _idade, typeof _peso );

//No prompt o computador espera o usuario digitar uma informação
//Sempre quando recebemos uma informação de entrada ela vem em STRING
_nome = prompt ('Qual é o nome?');      //string
_idade = prompt ('qual é a idade?');    //string
_peso = prompt ('qual é o peso?');      //string
console.log(_nome, _idade, _peso);

console.log(typeof _nome, typeof _idade, typeof _peso );

//criam 2 variaveis num1 e num2 e recebam as informações pelo prompt
let num1 = prompt ('Digite o primeiro n°:')
let num2 = prompt ('Digite o segundo n°:')
console.log (num1 + num2);

console.log(typeof num1);   //string
num1 = Number(num1);        //Convertendo a variavel do tipo string para Number
console.log(typeof num1);   //Number

//Receber uma informação já conertendo seu tipo de dados
let nr1 = Number(prompt('Digite o primeiro n°:'));    //Number
let nr2 = Number(prompt('Digite o segundo n°:'));     //Number
console.log (nr1 + nr2);

//Convertendo os dados de uma variável
nr1 = "100.14";            //String
nr1 = Number("100.14");    //Convertendo String para Number
nr1 = parseInt("100.14");  //Convertendo String para Integer
nr1 = parseFloat("100");   //Convertendo String para Float 100.00
nr1 = String(100.14);      //Convertendo um Number para String

_nome = prompt ('Qual é o nome?');      //string
_idade = parseInt ('qual é a idade?');    //int
_peso = parseFloat ('qual é o peso?');      //float
console.log(_nome, _idade, _peso);

