// ESCREVER ALGUMA COISA DE SAÍDA DE UM PROCESSO EM UM TERMINAL:
// process.stdout.write('Alguma coisa \n\n\n')

const { Console } = require('console')

const questions = [
  'O que aprendi hoje? ',
  'O que me deixou aborrecido? E o que eu poderia fazer para melhorar',
  'O que eu poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?'
]

// CRIAR UMA FUNÇÃO DE NOME ask E APLICAR O PROCESSO DE SAÍDA PADRÃO:

const ask = (index = 0) => {
  process.stdout.write('\n\n' + questions[index] + '>')
}

ask()

const answers = []
process.stdin.on('data', data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    // process.stdout.write(answers)
    console.log(answers)
    // desligar o processo:
    process.exit()
  }
})
