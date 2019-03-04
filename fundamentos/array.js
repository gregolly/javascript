const valores = [7, 7, 8.9, 5.7, 0]
console.log(valores[0], valores[4])

valores[5] = 10
console.log(valores)
console.log(valores.length)

valores.push(5,6,null,'olá', false, true)
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)