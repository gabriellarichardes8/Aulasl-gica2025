//Lista de exercícios
const prompt = require('prompt-sync')();

let numer = prompt('Digite um número do 1 ao 7: ')
switch (numer) {
    case '1':                        
        console.log('O dia é domingo');
        break;
    case '2':
        console.log('O dia é segunda');       
        break;
    case '3':
        console.log('O dia é terça');       
        break;    
    case '4':
        console.log('O dia é quarta');       
        break;    
    case '5':
        console.log('O dia é quinta');     
        break;    
    case '6':
        console.log('O dia é sexta');     
        break;  
    case '7':   
        console.log('O dia é sábado');     
        break;

default:
    console.log('Dia inválido ');
}