const num1 = 432
const num2 = 20

var somafunc = require('./funcoes/calc-soma')
const subfunc = require('./funcoes/calc-sub.js')
const divfunc = require('./funcoes/calc-div.js')
const multfunc = require('./funcoes/calc-mult.js')
const express = require('./funcoes/expressao.js')

console.log(' PARA EFETUAR CÁLCULOS DOS NÚMEROS 110 E 20:')
console.log('a soma é: ' + somafunc(num1, num2))
console.log('-------------------------------------')
console.log('a multiplicação é: ' + multfunc(num1, num2))
console.log('-------------------------------------')
console.log('a subtração é: ' + subfunc(num1, num2))
console.log('-------------------------------------')
console.log('a divisão é: ' + divfunc(num1, num2))
console.log('-------------------------------------')
console.log('-------------------------------------')
console.log('-------------------------------------')
console.log('o resultado da expressão: ' + express(num1, num2))
