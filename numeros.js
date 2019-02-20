const peso1 = 1.0;
const peso2 = number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1))

const avalicao1 = 9.871;
const avalicao2 = 8.657;

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total /(peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))