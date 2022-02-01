var http = require('http')

http
  .createServer(function (req, res) {
    res.end('TESTANDO CRIAÇÃO DE SERVIDOR E EXIBIÇÃO DE MENSAGEM')
  })
  .listen(8781)
console.log('O servidor está rodando!')
