# Projeto TrybeSmith!

<h1> Projeto TrybeSmith || 
  Criação de uma loja de itens medievais, no formato de uma _API_, utilizando _Typescript_</h1>

<br/>

## Descricao do Projeto

Projeto desenvolvido no bloco 26 - Modulo 3 - Desenvolvimento em BackEnd na turma 17 - Trybe. Conteudos aplicados: Typescript, Tipagens Estáticas e Genérics, Express com Typescript.

<br/>


## Desenvolvimento

Para este projeto, você vai criar uma loja de itens medievais, no formato de uma _API_, utilizando _Typescript_.

1. Desenvolvimento de todas as camadas da aplicação (_Models_, _Service_ e _Controllers_) e, por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados:

 - Criação, Leitura, Atualização e Exclusão (ou `CRUD` - _Create, Read, Update_ e _Delete_).

2. Criação de alguns _endpoints_ que irão ler e escrever em um banco de dados, utilizando o **MySQL**.

3. Desenvolvimento do código de cadastro de pessoas usuárias utilizando os conhecimentos adquiridos no bloco.

<br/>

## Habilidades desenvolvidas

* Declarar variáveis e funções com tipagens Typescript;
* Construir uma API Node Express utilizando o Typescript.

<br/>

## Tecnologias utilizadas

- Typescript;
- Docker;
- Node.js;
- Express;
- Mysql;
- JsonWebToken;
- Eslint;
- Joi.

<br/>


  ⚠️ **Dicas Importantes** ⚠️:

  - Não haverá front-end neste projeto, portanto não se preocupe com a visualização, apenas com as funcionalidades e organização do código;

  - Sua API deve ser desenvolvida dentro da pasta `./src`.
</details>

</details>

# Orientações


<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary><br />
  
  ## Com Docker
 

  > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.


✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

<img src="images/remote-container.png" width="800px" >

---
  
  ## Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.
  ✨ **Dica:** O avaliador espera que a versão do `node` utilizada seja a 16.

</details>

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - `git clone https://github.com/tryber/sd-017-project-trybesmith.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-017-project-trybesmith`

  2. Instale as dependências [**Caso existam**]

  - `npm install`

  3. Crie uma branch a partir da branch `main`

  - Verifique se você está na branch `main`
    - Exemplo: `git branch`
  - Se você não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-sd-017-project-trybesmith`
 
  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
      - Exemplo:
        - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
      - Exemplo:
        - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
        - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-017-project-trybesmith`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-017-project-trybesmith/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-017-project-trybesmith/pulls) e confira que o seu _Pull Request_ está criado
  
</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-017`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🍪 Informações sobre a API </strong></summary><br />
  
  **⚠️ Leia as informações abaixo atentamente e siga à risca o que for pedido. ⚠️**

  **👀 Observações importantes:**

  - O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação;

  - O projeto deve rodar na porta **3000**;

  - O arquivo `index.ts` existe para rodar corretamente os testes. Todo o projeto (incluindo as rotas) deverá ser feito dentro do arquivo `app.ts`;

  - Você pode utilizar as funções `json.parse` e `json.stringify` nos models;

  ---

  ###  Todos os seus endpoints devem estar no padrão REST

  - Use os verbos `HTTP` adequados para cada operação;

  - Agrupe e padronize suas _URL_ em cada recurso;

  - Garanta que seus _endpoints_ sempre retornem uma resposta, havendo sucesso nas operações ou não;

  - Retorne os códigos de _status_ corretos (recurso criado, erro de validação, etc).

  ---

  Há dois arquivos no diretório `./src/`: `index.ts` e `app.ts`, **ambos não devem ser renomeados ou apagados**. 

  Você poderá fazer modificações em ambos os arquivos, porém **no arquivo `app.ts` o seguinte trecho de código não deve ser removido**:

  ```typescript
  import express from 'express';

  const app = express();

  app.use(express.json());

  export default app;
  ```

  Isso está configurado para o avaliador funcionar corretamente.

</details>

<details>
  <summary><strong>🏦 Conexão com o Banco</strong></summary><br />
  
  A conexão do banco local deverá conter os seguintes parâmetros:

  ```typescript
  import dotenv from 'dotenv';
  import mysql from 'mysql2/promise';

  dotenv.config();

  const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  }); // sua conexão NÃO deve ter o database, este deve ser especificado em cada query

  export default connection;
  ```

  **⚠️ É essencial configurar essas 3 variáveis de ambiente para testar o projeto localmente: ⚠️**

  ```
    host: process.env.MYSQL_HOST
    user: process.env.MYSQL_USER
    password: process.env.MYSQL_PASSWORD
  ```

  **⚠️ Variáveis de ambiente além das especificadas acima não são suportadas, pois não são esperadas pelo avaliador do projeto. ⚠️**

  **⚠️ É essencial que seu arquivo tenha o nome `connection.ts` e esteja no diretório `src/models` ⚠️**

</details>

<details>
  <summary><strong>🪑 Tabelas</strong></summary><br />

  O banco terá três tabelas: pessoas usuárias, produtos e pedidos.

  ```sql
  DROP SCHEMA IF EXISTS Trybesmith;
  CREATE SCHEMA Trybesmith;

  CREATE TABLE Trybesmith.Users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username TEXT NOT NULL,
    classe TEXT NOT NULL,
    level INTEGER NOT NULL,
    password TEXT NOT NULL
  );

  CREATE TABLE Trybesmith.Orders (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    userId INTEGER,
    FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
  );

  CREATE TABLE Trybesmith.Products (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    amount TEXT NOT NULL,
    orderId INTEGER,
    FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
  );
  ```

  O arquivo `Trybesmith.sql` contém as _queries_ que criam e populam o banco como o teste faz, e os testes **restauram** o banco de dados após sua execução.

  Para que o avaliador funcione corretamente, tanto local quanto remoto, sua `connection.ts` não deve conter o database e suas _queries_ devem conter o banco de dados explicitamente como o exemplo abaixo:
  ```sh
  SELECT * FROM Trybesmith.Products;
  ```

</details>


### Suas queries



<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

  Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

  ⚠️ Pull requests com issues de linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento! ⚠️

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Todos os requisitos do projeto serão testados **automaticamente**. Cada `endpoint` possui vários requisitos e os testes para cada requisito de um `endpoint` estão no arquivo de teste.

  Para executar os testes localmente, digite no terminal o comando `npm test`, ou para executar apenas um teste você pode usar `npm test 01`.

  ### Dica: desativando testes

  Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é bastante poluída. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, essa função "pula" um teste:

  ```typescript
    it.skip('Será validado que o campo "username" é obrigatório', async () => {
      const result = await request(app).post("/users").send({
        level: 2,
        classe: "classe",
        password: "senha",
      });
      expect(result.statusCode).toEqual(400);
      expect(result.body.message).toEqual("Username is required");
    });
  ```

  Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

  ![Testando um arquivo específico](./public/skip-tests.jpeg)

  ⚠️ Lembre-se de não entregar o projeto com nenhum teste ignorado. **Testes ignorados serão tratados como testes falhando**. ⚠️

  ⚠️ **Não apague, em hipótese alguma, qualquer teste ou arquivo deste repositório**. ⚠️

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. 
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

⚠️ **O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?**

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>

# Requisitos

## 1 - Crie um endpoint para a listagem de produtos

- O endpoint deve ser acessível através do caminho (`/products`);

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  - **[Será validado que é possível listar todos os produtos com sucesso]**
    - O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    ```json
    [
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
        "orderId": null
      },
      {
        "id": 2,
        "name": "Escudo do Herói",
        "amount": "100 diamond",
        "orderId": 1
      }
    ]
    ```
</details>

---

## 2 - Crie um endpoint para o cadastro de produtos

- O endpoint deve ser acessível através do caminho (`/products`);

- Os produtos enviados devem ser salvos na tabela `Products` do banco de dados;

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para name
  - **[Será validado que o campo "name" é obrigatório]**
    - Se o campo "name" não for informado, o resultado retornado deverá ser um  _status http_ `400` e
    ```json
      { "message": "\"name\" is required" }
    ```

  - **[Será validado que o campo "name" tem o tipo string]**
    - Se o campo "name" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"name\" must be a string" }
    ```

  - **[Será validado que o campo "name" é uma string com mais de 2 caracteres]**
    - Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"name\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para amount
  - **[Será validado que o campo "amount" é obrigatório]**
    - Se o campo "amount" não for informado, o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"amount\" is required" }
    ```

  - **[Será validado que o campo "amount" tem o tipo string]**
    - Se o campo "amount" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"amount\" must be a string" }
    ```

  - **[Será validado que o campo "amount" é uma string com mais de 2 caracteres]**
    - Se o campo "amount" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"amount\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  - **[Será validado que é possível cadastrar um produto com sucesso]**
    - O resultado retornado para cadastrar o produto com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:
    ```json
      {
        "id": 1,
        "name": "Poção de cura",
        "amount": "20 gold",
      }
    ```

</details>

---

## 3 - Crie um endpoint para o cadastro de pessoas usuárias

- O endpoint deve ser acessível através do caminho (`/users`);

- As informações de pessoas usuárias cadastradas devem ser salvas na tabela `Users` do banco de dados;

- O endpoint deve receber a seguinte estrutura:
```json
{
  "username": "string",
  "classe": "string",
  "level": 1,
  "password": "string"
}
```

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para username
  - **[Será validado que o campo "username" é obrigatório]**
    - Se a requisição não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"username\" is required" }
    ```

  - **[Será validado que o campo "username" tem o tipo string]**
    - Se o campo "username" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"username\" must be a string" }
    ```

  - **[Será validado que o campo "username" é uma string com mais de 2 caracteres]**
    - Se o campo "username" não for do tipo `string` com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"username\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para classe
  - **[Será validado que o campo "classe" é obrigatório]**
    - Se a requisição não tiver o campo "classe", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"classe\" is required" }
    ```

  - **[Será validado que o campo "classe" tem o tipo string]**
    - Se o campo "classe" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"classe\" must be a string" }
    ```

  - **[Será validado que o campo "classe" é uma string com mais de 2 caracteres]**
    - Se o campo "classe" não for do tipo `string` com mais de 2 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"classe\" length must be at least 3 characters long" }
    ```

  <br>

  > 👉 Para level
  - **[Será validado que o campo "level" é obrigatório]**
    - Se a pessoa usuária não tiver o campo "level", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"level\" is required" }
    ```

  - **[Será validado que o campo "level" tem o tipo number]**
    - Se o campo "level" não for do tipo `number`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"level\" must be a number" }
    ```

  - **[Será validado que o campo "level" deve ser um número maior que 0]**
    - Se o campo "level" não for do tipo `number` maior que 0, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"level\" must be greater than or equal to 1" }
    ```

  <br>

  > 👉 Para password
  - **[Será validado que o campo "password" é obrigatório]**
    - Se a requisição não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"password\" is required" }
    ```

  - **[Será validado que o campo "password" tem o tipo string]**
    - Se o campo "password" não for do tipo `string`, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"password\" must be a string" }
    ```

  - **[Será validado que o campo "password" é uma string com 8 ou mais caracteres]**
    - Se o campo "password" não for do tipo `string` com mais de 8 caracteres, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"password\" length must be at least 8 characters long" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  - **[Será validado que é possível cadastrar a pessoa usuária com sucesso]**
    - Se a pessoa usuária for cadastrada com sucesso, o resultado deverá ser conforme o exibido abaixo, com um _status http_ `201` e retornando um _token_:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
    ```

</details>

---

## 4 - Crie um endpoint para listar todos os pedidos

- O endpoint deve ser acessível através do caminho (`/orders`).
- Essa rota deve retornar todos os pedidos e os `id`s dos produtos associados a estes.

✨ **Dica:** São os produtos que contém os `id`s dos pedidos.

✨ **Dica:** Você pode fazer a agregação direto na linguagem de programação, pegando pedidos e produtos separadamente e os juntando no TypeScript, ao invés de tentar criar uma complexa query em SQL.

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para orders

  - **[Será validado que é possível listar todos os pedidos com sucesso]**
    - Quando houver mais de um pedido, o resultado retornado para listar pedidos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
    ```json
      [
        {
          "id": 1,
          "userId": 2,
          "productsIds": [1, 2]
        },
        {
          "id": 2,
          "userId": 2,
          "productsIds": [3, 4]
        }
      ]
    ```
</details>

---

## Requisito Bônus

## 5 - Crie um endpoint para o login de pessoas usuárias

- O endpoint deve ser acessível através do caminho (`/login`).

- A rota deve receber os campos `username` e `password`, e esses campos devem ser validados no banco de dados.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "username": "string",
    "password": "string"
  }
```

**⚠️ Na configuração do `JWT` não use variáveis de ambientes para não ter conflito com o avaliador.**

<details close>
 <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para caso haja problemas no login
  - **[Será validado que o campo "username" é enviado]**
    - Se o _login_ não tiver o campo "username", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"username\" is required" }
    ```

  - **[Será validado que o campo "password" é enviado]**
    - Se o _login_ não tiver o campo "password", o resultado retornado deverá ser um _status http_ `400`
    ```json
      { "message": "\"password\" is required" }
    ```

  - **[Será validado que não é possível fazer login com um username inválido]**
    - Se o _login_ tiver o username inválido, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Username or password invalid" }
    ```

  - **[Será validado que não é possível fazer login com uma senha inválida]**
    - Se o login tiver a senha inválida, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Username or password invalid" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  - **[Será validado que é possível fazer login com sucesso]**
    - Se o login foi feito com sucesso, o resultado deverá ser um _status http_ `200` e deverá retornar um _token_:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
    ```
</details>

---

## 6 - Crie um endpoint para o cadastro de um pedido

- O endpoint deve ser acessível através do caminho (`/orders`);

- Um pedido só pode ser criado caso a pessoa usuária esteja logada e o token `JWT` validado;

- Os pedidos enviados devem ser salvos na tabela `Orders` do banco de dados, salvando `id` da pessoa usuária da aplicação que fez esse pedido. 

- A tabela `Products` também deve ser alterada, atualizando todos os produtos com os `id` incluídos na chave `productsIds` da requisição, e adicionando nesses produtos o `orderId` do pedido recém criado;

- O endpoint deve receber a seguinte estrutura:
```json
  {
    "productsIds": [1, 2]
  }
```

**⚠️ Ao cadastrar um pedido, lembre-se de atualizar os respectivos produtos no banco de dados, incluindo neles o número do pedido criado.**

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para token
  - **[Será validado que não é possível cadastrar pedidos sem token]**
    - Se o token não for informado, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Token not found" }
    ```

  - **[Será validado que não é possível cadastrar um pedido com token inválido]**
    - Se o token informado não for válido, o resultado retornado deverá ser um _status http_ `401` e
    ```json
      { "message": "Invalid token" }
    ```

  <br>

  > 👉 Para products
  - **[Será validado que o campo "productsIds" é obrigatório]**
    - Se o corpo da requisição não possuir o campo "productsIds", o resultado retornado deverá ser um _status http_ `400` e
    ```json
      { "message": "\"productsIds\" is required" }
    ```

  - **[Será validado que não é possível criar um pedido com o campo "productsIds" não sendo um array]**
    - Se o valor do campo "productsIds" não for um array, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"productsIds\" must be an array" }
    ```

  - **[Será validado que não é possível cadastrar um pedido se o campo "productsIds" for um array vazio]**
    - Se o campo "productsIds" possuir um array vazio, o resultado retornado deverá ser um _status http_ `422` e
    ```json
      { "message": "\"productsIds\" must include only numbers" }
    ```

  <br>

  > 👉 Para caso os dados sejam enviados corretamente
  - **[Será validado que é possível criar um pedido com sucesso com 1 item]**
    - O resultado retornado para cadastrar um pedido com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:
    ```json
      {
        "userId": 1,
        "products": [1],
      }
    ```

  - **[Será validado que é possível criar um pedido com sucesso com vários itens]**
    - O resultado retornado para cadastrar um pedido com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:
    ```json
      {
        "userId": 1,
        "products": [1, 2]
      }
    ```
</details>













## Colaboradores

Projeto realizado individualmente.

<br/>

## Status

Finalizado.

<br/>

## Desempenho

100% nos requisitos totais.

<br/>

## Modelo da tabela recebido com o script da Normalizacao.

Para acessar a tabela original e script da normalizacao, acesse o link do excalidraw:

<https://excalidraw.com/#json=cjLDBBy_omlkRlVpUUO2G,EZzpY36Imu39u4_nEmKWoA/>


## Desafio 5

Estamos fazendo um estudo das músicas mais tocadas e precisamos saber quais são as duas músicas mais tocadas no momento. Crie uma `QUERY` que possua duas colunas:

1. A primeira coluna deve possuir o alias "**cancao**" e exibir o nome da canção.

2. A segunda coluna deve possuir o alias "**reproducoes**" e exibir a quantidade de pessoas que já escutaram a canção em questão.

Seu resultado deve estar ordenado em ordem decrescente, baseando-se no número de reproduções. Em caso de empate, ordene os resultados pelo nome da canção em ordem alfabética. Queremos apenas o top 2 de músicas mais tocadas.

Sua `QUERY` deve retornar a seguinte informação:

![Top 2 hits do momento](./images/top_2_hits_do_momento.png)


O que será verificado:

- Será validado se existe uma `QUERY` que exibe os dados corretos nas colunas `cancao` e `reproducoes`.

- Será validado se as colunas estão ordenadas de forma correta.

---

## Desafio 6

Tendo como base o valor dos planos e o plano que cada pessoa usuária cadastrada possui no banco, queremos algumas informações sobre o faturamento da empresa. Crie uma `QUERY` que deve exibir quatro dados:

1. A primeira coluna deve ter o alias "**faturamento_minimo**" e exibir o menor valor de plano existente para uma pessoa usuária.

2. A segunda coluna deve ter o alias "**faturamento_maximo**" e exibir o maior valor de plano existente para uma pessoa usuária.

3. A terceira coluna deve ter o alias "**faturamento_medio**" e exibir o valor médio dos planos possuídos por pessoas usuárias até o momento.

4. Por fim, a quarta coluna deve ter o alias "**faturamento_total**" e exibir o valor total obtido com os planos possuídos por pessuas usuárias.

Para cada um desses dados, por se tratarem de valores monetários, deve-se arredondar o faturamento usando apenas duas casas decimais.

Sua `QUERY` deve retornar a seguinte informação:

![Faturamento atual](./images/faturamento_atual.png)

O que será verificado:

- Será validado se existe uma `QUERY` que exibe os dados corretos nas colunas `faturamento_minimo`, `faturamento_maximo`, `faturamento_medio` e `faturamento_total`.

---

## Desafio 7

Mostre uma relação de todos os álbuns produzidos por cada pessoa artista, com a quantidade de seguidores que ela possui, de acordo com os detalhes a seguir. Para tal, crie uma `QUERY` com as seguintes colunas:

1. A primeira coluna deve exibir o nome da pessoa artista, com o alias "**artista**".

2. A segunda coluna deve exibir o nome do álbum, com o alias "**album**".

3. A terceira coluna deve exibir a quantidade de pessoas seguidoras que aquela pessoa artista possui e deve possuir o alias "**seguidores**".

Seus resultados devem estar ordenados de forma decrescente, baseando-se no número de pessoas seguidoras. Em caso de empate no número de pessoas, ordene os resultados pelo nome da pessoa artista em ordem alfabética e caso há artistas com o mesmo nome, ordene os resultados pelo nome do álbum alfabeticamente.

Sua `QUERY` deve retornar a seguinte informação:

![PerfilArtistas](./images/perfil_artistas.png)

O que será verificado:

- Será validado se existe uma `QUERY` que exibe os dados corretos nas colunas `artista`, `album` e `seguidores`.

- Será validado se as colunas estão ordenadas de forma correta.

---

## Desafio 8

Mostre uma relação dos álbuns produzidos por um artista específico, neste caso `"Walter Phoenix"`.
Para isto crie uma `QUERY` que o retorno deve exibir as seguintes colunas:

1. O nome da pessoa artista, com o alias "**artista**".

2. O nome do álbum, com o alias "**album**".

Os resultados devem ser ordenados pelo nome do álbum em ordem alfabética.

Sua `QUERY` deve retornar a seguinte informação:

![Álbuns da pessoa artista](./images/AlbunsDoArtista.png)

O que será verificado:

- Será validado se a `QUERY` retorna a coluna `artista` contendo o nome da pessoa artista e a coluna `album` contendo o nome do album.

- Será validado se as colunas estão ordenadas de forma correta.

---

## Desafio 9

Crie uma `QUERY` que exibe a quantidade de músicas que estão presentes atualmente no histórico de reprodução de uma pessoa usuária específica. Para este caso queremos saber quantas músicas estão no histórico do usuário `"Bill"` e a consulta deve retornar a seguinte coluna:

1. O valor da quantidade, com o alias "**quantidade_musicas_no_historico**".

Sua `QUERY` deve retornar a seguinte informação:

![Quantidade de músicas no histórico](./images/quantidade_musicas_no_historico.png)


O que será verificado:

- Será validado se a `QUERY`, retorna a quantidade correta de canções presentes no histórico de reprodução da pessoa especificada.

---

## Desafio 10

Crie uma `QUERY` que exiba o nome e a quantidade de vezes que cada canção foi tocada por pessoas usuárias do plano gratuito ou pessoal, de acordo com os detalhes a seguir:

* A primeira coluna deve exibir o nome da canção, com o alias "**nome**";

* A segunda coluna deve exibir a quantidade de pessoas que já escutaram aquela canção, com o alias "**reproducoes**";

* Seus resultados devem estar agrupados pelo nome da canção e ordenados em ordem alfabética.

Sua `QUERY` deve retornar a seguinte informação:

![Canções premium](./images/cancoes_premium.png)

O que será verificado:

- Será validado se existe uma `QUERY` que exibe os dados corretos nas colunas `nome` e `reproducoes`.

- Será validado se as colunas estão ordenadas de forma correta.

## BÔNUS

### Desafio 11

Crie uma `QUERY` que altere o nome de algumas músicas e as ordene em ordem alfabética com as colunas abaixo se baseando nos seguintes critérios:

1. O nome da música em seu estado normal com o alias **nome_musica**

2. O nome da música atualizado com o alias **novo_nome**

**Critérios**

- Trocar a palavra **"Streets"** no final do nome de uma música por **"Code Review"**

- Trocar a palavra **"Her Own"** no final do nome de uma música por **"Trybe"**

- Trocar a palavra **"Inner Fire"** no final do nome de uma música por **"Project"**

- Trocar a palavra **"Silly"** no final do nome de uma música por **"Nice"**

- Trocar a palavra **"Circus"** no final do nome de uma música por **"Pull Request"**

Sua `QUERY` retornar a seguinte informação:

![Nome das músicas trocados](./images/replace_name.png)

O que será verificado:

- Será validado se existe uma `QUERY` que exibe os dados corretos nas colunas `nome_musica` e `novo_nome`.

- Será validado se as colunas estão ordenadas de forma correta.

---

## Depois de terminar o desenvolvimento

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### Revisando um pull request

À medida que você e as outras pessoas que estudam na Trybe forem entregando os projetos, vocês receberão um alerta via Slack para também fazer a revisão dos Pull Requests dos seus colegas. Fiquem atentos às mensagens do "Pull Reminders" no Slack!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.

---

# Avisos Finais


Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, nãose assuste se isso acontecer, ok?

---
