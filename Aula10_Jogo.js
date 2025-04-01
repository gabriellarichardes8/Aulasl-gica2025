const prompt = require('prompt-sync')();

console.log("====================================")
console.log("💕     JOGO DA ADIVINHAÇÃO       💕");
console.log("====================================")

let nrSecreto = Math.floor(Math.random() * 100) + 1;
let acertou = false;
let tentativas = 0;

while (acertou == false) {
    let chute = Number(prompt('Digite um número entre 1 e 100: '));
    tentativas++;  //tentativas = tentativas + 1;
    if (chute == nrSecreto) {
        console.log(`Parabéns, você acertou em ${tentativas} tentativas!!! 🥳👏👏`);
        acertou = true
    } else if (chute > nrSecreto) {
        console.log(`Você chutou ${chute}, tente um número menor 👇`);
    } else if (chute < nrSecreto) {
        console.log(`Você chutou ${chute}, tente um número maior 👆`);
    }

}
console.log('FIM');