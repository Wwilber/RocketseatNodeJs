## HTTP:
- É um protocolo de comunicação entre o cliente e o servidor.
- O cliente pede - envia - recebe dados através do protocolo http.
** módulo(original) http do NODE: bastante limitado:
var http = require("http");
*** PARA ABRIR UM SERVIDOR HTTP PARA SE COMUNICAR COM UM CLIENTE:
*** CHAMAR A FUNÇÃO createServer
*** FUNÇÃO .listen() - indicar a porta de rede que quer abrir o servidor.
http.createServer().listen(8781)
console.log("O servidor está rodando!");

*** FUNÇÃO CALLBACK(function(req - requisição, res - resposta)) .end = envia a mensagem - PARA EXIBIR UMA MENSAGEM:
http.createServer(function(req, res){
  res.end("olá testando");
}).listen(8781);

****** Outro módulo de exemplo:
var arquivo = require("fs") - módulo responsável de trabalhar com arquivos do sistema operacional

** Existem frameworks - ferramentas que mudam a forma de trabalho.
expressjs.com = FRAMEWORK minimalista - simples e rápido no sentido de velocidade de desenvolvimento
para instalar o express salvando os arquivos dentro do próprio projeto:
npm install express --save
