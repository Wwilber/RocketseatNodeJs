INICIO NODEJS: 3. INICIANDO NA PRÁTICA:
3.1. EXECUTANDO O PRIMEIRO ARQUIVO E ENTENDENDO GLOBAIS:

# lista as variáveis globais do node:

console.log(global)

# indica o diretório que está o arquivo:

console.log(\_\_dirname)

# indica o nome do arquivo que estou utilizando:

console.log(\_\_filename)

3.2. O QUE SÃO E COMO UTILIZAR MÓDULOS:

# Função REQUIRE:maneira de usar módulos NATIVOS(EXEMPLO: path) e módulos que podemos CRIAR, ou instalar no NODE, dentro dos nossos arquivos e dentro dos nossos projetos:

const path = require('path')

console.log(path.basename(\_\_filename))

console.log(path.basename('/users/starter/docs.js'))

# CRIANDO MÓDULOS:

// module.exports: objeto global que exporta um modulo criado no arquivo exports.js.
module.exports = 'Enviando dados do meu módulo'

CHAMANDO O MÓDULO CRIADO NO ARQUIVO EXPORTS.JS pelo arquivo REQUIRE.JS:
// \*\*\* CHAMANDO MEUS MÓDULOS:
const myModule = require('./exports')
console.log(myModule)

// argv = é um array que informa o node que está rodando e o nome do arquivo.
// o process com o argv está apresentando uma lista de argumentos que está rodando no node.
console.log(process.argv)

// console.log('seu nome é', process.argv[2] + ' ' + process.argv[3])

// const firstName = process.argv[2]
// const lastName = process.argv[3]
// console.log(`seu nome é ${firstName} ${lastName}`)
