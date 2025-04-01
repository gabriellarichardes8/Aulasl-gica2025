const prompt = require('prompt-sync')();


let comidas = [];
for (let x = 1; x < 6 ; x++){
    let comida = prompt('Digite uma comida: ');
    comidas.push(comida);
}

console.log(comidas [0]);
console.log(comidas [4]);

comidas.splice(6, 1, 'creme de milho');
console.log(comidas);

comidas.splice(7, 0, 'feijoada');
console.log(comidas);

comidas.splice(5, 0, 'escondidinho de carne');
console.log(comidas);

comidas.shift();
console.log(comidas);

comidas.pop();
console.log(comidas);

console.log(comidas.slice(0,3));
console.log(comidas.slice(-4));

console.log(comidas);
comidas = ['lasanha','carne de panela','churrasco','farofa','escondidinho de carne','purê de batata','creme de milho']
console.log('ordem', comidas.reverse())