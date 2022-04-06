# Aula 6-SD - Teorica - 05/04/2022
Aula6-SD Teórica
Este arquivo é do tipo <strong>markdown<strong>
Quem quiser saber mais:

### Aula 6-SD - Teorica - 05/04/2022

# Criando uma API RestFull com NodeJS e Express

1. Após criar o repositório no git...
- Abrir terminal (git bash) em uma pasta
- Clonar o repositório nesta pasta local por meio do comando
 git clone <endereço do repositório>

 2. Abrir a pasta com VSCODE

 3. Abrir o terminal no VSCODE

 4. Criar o arquivo **package.json**
 'npm init'

 5. Caso queiram usar o **nodemon**
 'npm install -g nodemon@1.19.4'

 6. Instalar o Express
 'npm install express'

 7. Criar o arquivo .gitignore dizendo para o git ignorar a pasta node_modules.
 'node modules'

 8. Instalar o config
 Podemos criar variáveis de ambiente em um arquivo separado chamado config.json. O pacote config nos permite organizar a configuração da nossa aplicação e usar no nosso projeto.

 'npm install config"

 Para usar, crie uma pasta chamada config e dentro desta pasta iremos criar um arquivo chamado

default.json

neste arquivo adicionamos um objeto de configuração:

{
    "server": {
        "port": 4000,
        "path_root": "/api/v1/"
    }
}

9. Vamos codificar a inicialização do servidor usando o express:

const express = require("express"); 

const app = express();
let port = config.get("server.port");

app.listen(port,function() {
    console.log("Servidor iniciado e escutando na porta "+port);
});
