const getflagValue = require('./flagsDesafio')

console.log(`Oi ${getflagValue('--name')}. ${getflagValue(`--greeting`)}`)
