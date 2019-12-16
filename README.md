# starwars-characters

Aplicação que armazena dados de uma API externa e exibe os filmes e personagens de Star Wars.


## Backend - Node.js

### Funcionalidades

    * Criação de tabelas com migrations e seeds.
    * Criação de servidores de desenvolvimento com Docker.
    * Estilização e padronização do código com EditorConfig, ESLint e Prettier.

### Instalação de requisitos
1. [Node](https://nodejs.org/en/download/package-manager/) &rarr; recomendo a instalação via package manager.
2. [Yarn](https://yarnpkg.com/lang/en/)(opcional) &rarr; gerenciador de pacotes mais performático e intuitivo.
3. [Docker](https://www.docker.com/get-started) &rarr; usado para a criação de ambientes isolados.

### Configuração da base de dados

Iremos configurar a base de dados que usaremos nesta aplicação:

1. [Postgres](https://www.postgresql.org/) &rarr; armazenará os dados estruturados.

Com o Docker iniciado e execute o comando abaixo:

```shell
    $ docker run --name postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=starwars -p 5432:5432 -d postgres:11.5-alpine
```

Este comando irá criar nosso banco de dados e o database.

### Variaveis de ambiente

Depois do servidor configurado, crie seu arquivo ```.env``` na raiz pois temos que inserir as credenciais de alguns recursos como:

1. APP &rarr; Váriaveis da aplicação.
2. DATABASE &rarr; Váriaveis dos servidores usados na aplicação

Iremos usar estar credenciais:

```
APP_URL=http://localhost:3333
NODE_ENV=development
DB_HOST=localhost
DB_USER=postgres
DB_PASS=postgres
DB_NAME=starwars

```

### Preparando a aplicação

> comando deverá ser executado à partir da pasta ```backend```.

Instale os pacotes:
```shell
    $ yarn
```

### Criação das tabelas com migrations

Vamos criar todas as tabelas que usaremos usando sequelize:
```shell
    $ yarn sequelize db:migrate 
```

Populando as tabelas com dados para teste(vamos popular as imagens dos filmes. Podemos também fazer de forma manual usando a rota de upload de imagens mostrada mais à frente):
```shell
    $ yarn sequelize db:seed:all
```

### Executando a aplicação

> comando deverá ser executado à partir da pasta ```backend```.

Inicie a aplicação:
```shell
    $ yarn dev
```

Após este comando, será executada a classe de sincronismo com API swapi.co que está em ```./src/lib/Sync.js```

### Rotas

Rota que adiciona uma imagem a categoria selecionada:
``` /avatar/:id/:ent/ ```

```:ent``` &rarr; Entidade na qual será feito o upload('Character' ou 'Film').
```:id``` &rarr; id do filme ou personagem que receberá a imagem.
![R1](https://i.imgur.com/cpNGgPF.png)

Rota que retorna todos os personagens que atuaram no filme.
``` /actuations/:film/ ```

```:film``` &rarr; id do filme que deseja resgatar os personagens.
![R2](https://imgur.com/pF4Aj5h.jpg)

Rota que retorna todos os filmes.
```/films/ ```
![R3](https://imgur.com/fJ6F0iW.jpg)

## Frontend - React.js

### Subindo a aplicação

> comando deverá ser executado à partir da pasta ```frontend```.

Instale os pacotes:
```shell
    $ yarn
```

Inicie a aplicação:
```shell
    $ yarn start
```

### Rotas

``` localhost:3000/ ``` &rarr; Home Page.

![HP](https://imgur.com/j3QGB8v.jpg)

``` localhost:3000/films/:film ``` &rarr; Exibe os personagens de acordo com o filme.

![FC](https://imgur.com/szVvVdC.jpg)



