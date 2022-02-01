const num1 = 10
const num2 = 20

var somafunc = require('./funcoes/calc-soma')
const subfunc = require('./funcoes/calc-sub.js')
const divfunc = require('./funcoes/calc-div.js')
const multfunc = require('./funcoes/calc-mult.js')

console.log('a soma é: ' + somafunc(num1, num2))
console.log('a multiplicação é: ' + multfunc(num1, num2))
console.log('a subtração é: ' + subfunc(num1, num2))
console.log('a divisão é: ' + divfunc(num1, num2))
