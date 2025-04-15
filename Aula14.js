const prompt = require('prompt-sync')();
function Linha () {
    console.log(' - * - * - * - * - * - * - * - * - * - * - ');
}

Linha();
console.log(' SESI / SENAI ');

function Cabecalho () {
console.log(' - * - * - * - * - ');
console.log(' SESI / SENAI');
}
Cabecalho();


function CabecalhoEscola (nomeEscola) {
    Linha();
    console.log(nomeEscola);
    Linha();
    }
    CabecalhoEscola('USP');
    CabecalhoEscola('SESI');

    function Soma (nr1, nr2){
        let resultado = nr1 + nr2;
        console.log(resultado);
        
    }
    Soma (5, 8);
    Soma (1232312, 90094);

    //Função com parâmetros e retorno
    function Media (n1, n2){
        let resultado = (n1 + n2) / 2;
        return resultado;
    }

    let valor = Media(5, 8);

    function Dobro (n1, n2){
        console.log(n1 + n2);
    }


    