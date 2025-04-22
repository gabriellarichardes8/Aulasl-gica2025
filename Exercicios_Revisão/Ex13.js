const prompt = require('prompt-sync')();

let notas = [8 + 9 + 10 + 10]
let media = notas / 4

if (media > 7) {
    console.log('Foi aprovado');
    } else if (media >= 5 && media <= 7) {
    console.log('Está em recuperação');
    } else if (media < 5) {
    console.log('Foi reprovado');
    }