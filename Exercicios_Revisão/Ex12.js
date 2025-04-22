const prompt = require('prompt-sync')();

let listaImpar = []
let listaPar = []
let A = [1, 2, 3, 4, 5]
for (numeros of A){
    if (numeros % 2 == 1){
        listaImpar.push(numeros)
    }
    if (numeros % 2 == 0){
        listaPar.push(numeros)
    }
}
console.log(listaImpar);
console.log(listaPar);
