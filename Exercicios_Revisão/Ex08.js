const prompt = require('prompt-sync')();

function valor() {
let nr = prompt('Digite um número: ');
if (nr > 0){
    console.log('O número é positivo');
    
}else{
    console.log('O número é negativo');
    
}
}
valor()