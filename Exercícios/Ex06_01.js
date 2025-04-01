//EXERCÍCIO

let filmes = ['Barbie', 'Toy Story', 'Rei Leão', 'Frozen', 'Moana', 'Divertidamente', 'Avatar'];

console.log(filmes [0]);
console.log(filmes [4]);

filmes.splice(6, 1, 'Enrolados');
console.log(filmes);

filmes.splice(7, 0, 'Titanic');
console.log(filmes);

filmes.splice(5, 0, 'Vingadores');
console.log(filmes);

filmes.shift();
console.log(filmes);

filmes.pop();
console.log(filmes);

console.log(filmes.slice(0,3));
console.log(filmes.slice(-4));

console.log(filmes);
filmes = ['Enrolados','Divertidamente','Vingadores','Moana','Frozen','Rei Leão','Toy Story']

console.log('ordem', filmes.reverse())
