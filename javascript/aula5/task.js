const nome = ('Paulo');
const sobreNome = ('Sérgio');
const idade = (18);
const peso = (74);
const alturaEmM = (1.74);
let IMC = peso / (alturaEmM * alturaEmM);
let anoNascimento = (2022 - idade);

console.log (`${nome} ${sobreNome} tem ${idade} anos pesa ${peso}kg`)
console.log (`tem ${alturaEmM} de altura e seu IMC é de ${IMC}`)
console.log (`${nome} nasceu em ${anoNascimento}`)
