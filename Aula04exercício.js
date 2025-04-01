const prompt = require('prompt-sync')();
//Exercícios Variáveis 
//exercício 1
let nomeAluno = "Gabriella"
let Altura = 1.60
let Escola = "Sesi"
let AnoAtual = 2025
console.log(nomeAluno + Altura + Escola + AnoAtual);

//exercício 2
let nomeProfessor = "Douglas"
let materia = "computação"
let anoIngresso = 2023
console.log(nomeProfessor + materia + anoIngresso);

//exercício 3

nomeAluno = prompt ('como é o seu nome?');                        //String
Altura = parseFloat(prompt('qual é a sua altura?'));              //Float
Escola = prompt('qual escola você estuda?');                      //String
AnoAtual = parseInt(prompt('qual é o ano atual?'));               //Int
nomeProfessor = prompt('qual é o nome do seu professor?')         //String
materia = prompt('qual é sua materia?')                                    //String
anoIngresso = parseInt(prompt('qual ano ele foi ingresso?'))      //Int
console.log(nomeAluno + Altura + Escola + AnoAtual + nomeProfessor + materia + anoIngresso);