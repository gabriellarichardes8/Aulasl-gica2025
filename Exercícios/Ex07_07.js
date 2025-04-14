let produtos = 'Gol, Corsa, Palio, Monza, Fusca';
 let listaProdutos = produtos.split(',');
 for(const [pos, list] of listaProdutos.entries()){
    console.log(`${pos} e ${list}`)
}

 