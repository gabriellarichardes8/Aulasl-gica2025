//Lista de exercícios
const prompt = require('prompt-sync')();

let numer = prompt('Digite um número de um mês do 1 ao 12: ')
switch (numer) {
    case 1:                        
        console.log('Mês Janeiro');
        break;
    case '2':
        console.log('Mês Fevereiro');       
        break;
    case '3':
        console.log('Mês Março');       
        break;    
    case '4':
        console.log('Mês Abril');       
        break;    
    case '5':
        console.log('Mês Maio');     
        break;    
    case '6':
        console.log('Mês Junho');     
        break;  
    case '7':   
        console.log('Mês Julho');     
        break;
    case '8':   
        console.log('Mês Agosto');     
        break;
    case '9':   
        console.log('Mês Setembro');     
        break;
    case '10':   
        console.log('Mês Outubro');     
        break;
    case '11':   
        console.log('Mês Novembro');     
        break;
    case '12':   
        console.log('Mês Dezembro');     
        break;

default:
    console.log('Digite o número de um mês do 1 ao 12: ');
}