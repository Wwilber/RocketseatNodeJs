# NPM - Node Packeage Manager: Gerenciador de pacotes do node.

_glossary: Dependencies, Packages, Modules_

# verificar se temos o npm instalado "npm -v"

npv -v = apresenta a versão do NPM instalada.

# criar nosso próprio pacote:

# com perguntas:

npm init

package name: (npm) qualquer nome
version: (1.0.0)
description: aprendendo node
entry point: (index.js)
test command:
test command:
git repository:
keywords:
author:
licence: "isc"
Is this ok? (yes)

- após responder as perguntas é criado um arquivo package.json

# sem perguntas:

npm init -y

- é criado um arquivo packege.json e são feitas as alterações diretamente no arquivo.

# o que é o arquivo package.json: é um arquivo no formato .json:

-atualizado diretamente no arquivo package.json as informações do js.

# utilizar módulos de terceiros:

# INSTALAR O MÓDULO DE TERCEIROS CFONTS:

npm install cfonts
OU
npm i cfonts

# INSTALAR O MÓDULO CFONTS COMO DEPENDÊNCIA SOMENTE DE DESENVOLVIMENTO:

npm i cfonts -D

# INSTALAR VÁRIOS PACOTES DE UMA VEZ SÓ:

npm i cfonts inquirer opn

# COMANDO PARA ATUALIZAR E REMAPEAR O PACKAGE-LOCK.JSON: depois de alterado o package.json:

npm update

# execução no terminal:

PS E:\ANO-2022\WILBER\nodeJsRocketseat\npm> npm install cfonts

added 16 packages, and audited 17 packages in 4s

2 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
PS E:\ANO-2022\WILBER\nodeJsRocketseat\npm>

# o que é o diretório node_modules:

- pasta que não deve ser enviada para o repositório.
- é criado um arquivo .gitignore na raiz do projeto que é ignorada a pasta node_module/

# o que é o arquivo package-lock.json:

- Não é preciso fazer nada com esse arquivo.
- É um arquivo que faz um mapeamento de todas as dependências. Mapeia todos os módulos.

# criar scripts para rodar com o npm:

npm run test
npm run start
\*\*\* só o start pode rodar usando "npm start"; para todos os outros é necessário colocar npm run ...

# INSTALANDO DEPENDÊNCIAS GLOBAIS:

- para instalar algum módulo como um todo - não por projeto - como feito anteriormente.

npm i opn -g

no terminal:
PS E:\ANO-2022\WILBER\nodeJsRocketseat\npm\node_modules> npm i opn -g
npm WARN deprecated opn@6.0.0: The package has been renamed to `open`

changed 2 packages, and audited 3 packages in 4s

found 0 vulnerabilities
PS E:\ANO-2022\WILBER\nodeJsRocketseat\npm\node_modules>

# LOCALIZAR O CAMINHO DA INSTALAÇÃO DO MÓDULO GLOBAL:

npm root -g

no terminal:
PS E:\ANO-2022\WILBER\nodeJsRocketseat\npm\node_modules> npm root -g
C:\Users\Aline\AppData\Roaming\npm\node_modules

# DESINSTALANDO DEPENDÊNCIAS GLOBAIS:

npm uninstall opn -g]

# MUDAR VERSÃO DOS PACOTES:

- instalação de um pacote:
  npm i moment

DESCRIÇÃO DA VERSÃO NO .JSON:
"dependencies": {
"cfonts": "^2.10.0",
"moment": "^2.29.1"
}
"^2.29.1":
"~2.29.1":
"2.29.1": indica que nunca vai mudar de versão.
"\*": muda todas as versões.
~ = atualiza só o patch(1);
^ = indica que sempre que atualizar, vão ser as duas versões: minor e patch(29.1);
major - versão que poderá quebrar, dependendo do q acontece (2):
minor - tem alteração que não vai quebrar o pacote (29):
patch - bug (1):

# alterando a versão do moment:

npm i moment@1.5.1

# mostra as versões do moment:

npm outdated

PS E:\ANO-2022\WILBER\nodeJsRocketseat\npm> npm outdated
v. instalada versão desejada ultima versão disponível
Package Current Wanted Latest Location Depended by
moment 1.5.1 1.7.2 2.29.1 node_modules/moment npm

# atualizar versão(atualiza para a versão: wanted):

npm upgrade

# atualizar para última versão disponível:

npm i moment@latest

# removendo pacotes:

npm uninstall moment

