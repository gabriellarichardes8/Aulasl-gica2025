const prompt = require('prompt-sync')();

function FormatarData  (dia, mes, ano){
    let resultado = `${dia} / ${mes} / ${ano}`
    return resultado
}
console.log(FormatarData('12','05','2025'));



