const prompt = require('prompt-sync')();

let hora = prompt('quanto você ganha por hora?: ')
let horasTrabalhadas = prompt('quantas horas você trabalha por mês?: ')
let SalarioBruto = hora * horasTrabalhadas 
console.log(`Você recebe cerca de R$ ${SalarioBruto} do salário bruto`);

let ImpostoDeRenda = (hora / 100) * 11
console.log(`Você pagou R$ ${ImpostoDeRenda} de Imposto De Renda `);

let INSS = (hora / 100) * 8
console.log(`Você pagou R$ ${INSS} de INSS `);

let sindicado = (hora / 100) * 5
console.log(`Você pagou R$ ${sindicado} de sindicado `);

let descontos = ImpostoDeRenda + INSS + sindicado
console.log(`Você pagou cerca de R$ ${descontos} de descontos`);

let SalarioLiquido = SalarioBruto - descontos 
console.log(`Seu salário final é de R$ ${SalarioLiquido} `);
