const nome = "rebeca"
const concat = 'olá' + nome + '!'
const template = `
   Olá
   ${nome}!`
console.log(concat, template);

//expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)