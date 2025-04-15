const prompt = require('prompt-sync')();

function Tabuada (numer){
    for (let x = 0; x <= 10; x++){
        console.log(`${numer} x ${x} = ${numer * x}`);
    
    }
}

Tabuada(5)