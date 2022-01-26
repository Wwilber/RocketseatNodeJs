// console.log(process)
// argv = em termo de estrutura de dados = é um array que informa o node(versão que está rodando) e o nome do arquivo.
// o process com o argv está apresentando uma lista de argumentos que está rodando no node.
console.log(process.argv)

console.log('seu nome é', process.argv[2] + ' ' + process.argv[3])

const firstName = process.argv[2]
const lastName = process.argv[3]
console.log(`seu nome é ${firstName} ${lastName}`)
