const prompt = require('prompt-sync')();

let somaIdadeM = 0;
qntdeM = 0;
let somaIdadeF = 0;
qntdeF = 0;

for (let x = 1; x <= 10; x++){
    let idade = Number(prompt('Digite sua idade: '));
    let sexo = prompt('Digite seu sexo: (M/F) ');

    if (sexo == 'M') {
        qntdeM++;
        somaIdadeM = somaIdadeM + idade;
    } else if (sexo == 'F') {
        qntdeF++;
        somaIdadeF = somaIdadeF + idade;
    }
}

console.log(`A média do sexo M é de ${somaIdadeM / 10}`)
console.log(`A média do sexo F é de ${somaIdadeF / 10}`)
console.log(`A média dos grupo é de ${(somaIdadeF + somaIdadeM) / 10}`)