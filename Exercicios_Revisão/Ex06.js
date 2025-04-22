const prompt = require('prompt-sync')();

let altura = prompt('Digite sua altura: ')
let Sexo = prompt('Digite seu sexo F ou M: ');
if (Sexo == 'M'){
    console.log((72.7 * altura) - 58);
    
}else if (Sexo == 'F'){
    console.log((62.1 * altura) - 44.7);
    
}
