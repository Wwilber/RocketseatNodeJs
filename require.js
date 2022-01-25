// require: maneira de usar módulos NATIVOS(EXEMPLO: path) e módulos que podemos CRIAR, ou instalar no NODE, dentro dos nossos arquivos e dentro dos nossos projetos:

// *** MÓDULOS NATIVOS DO NODE:
const path = require('path')

console.log(path.basename(__filename))

console.log(path.basename('/users/starter/docs.js'))

// *** MEUS MÓDULOS:
const myModule = require('./exports')
console.log(myModule)
