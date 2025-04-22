const prompt = require('prompt-sync')();

function Impares (){
    for (nr = 0; nr <= 50; nr++){
        if (nr % 2 == 1)
        console.log(`${nr}`);
    }

}
Impares()