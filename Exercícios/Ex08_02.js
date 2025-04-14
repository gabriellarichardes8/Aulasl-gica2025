const prompt = require('prompt-sync')();

function ParImpar(n1) {
    if (n1 % 2 == 0){
        console.log(`${n1} é par`);
    } else {
        console.log(`${n1} é ímpar`);
    }
}      
ParImpar(2);
ParImpar(3);

