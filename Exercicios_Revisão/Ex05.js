const prompt = require('prompt-sync')();

let letra = prompt('Digite uma letra: ')
if (letra == 'F'){
    console.log('Sexo feminino');
    
}else if (letra == 'M'){
    console.log('Sexo masculino');
    
}else {
    console.log('Sexo Inválido');
    
}