# IFSP Lista de Exercícios backend

## Sumário
- [IFSP Lista de Exercícios backend](#ifsp-lista-de-exercícios-backend)
	- [Sumário](#sumário)
	- [Sobre](#sobre)
	- [Estrutura](#estrutura)
	- [Instalação e Execução](#instalação-e-execução)
	- [Contato](#contato)

## Sobre

Este projeto foi desenvolvido em [NodeJS](https://nodejs.org/en) e implementa operações CRUD (Create, Read, Update, Delete) em 3 tabelas no banco de dados. Cada tabela possui no mínimo 5 registros, permitindo a manipulação e visualização de dados de forma completa.

## Estrutura

```
|-- .gitignore
|-- package.json
|-- README.md
|-- script_database.sql
|-- variables.env
|-- src
  |-- db.js
  |-- routes.js
  |-- server.js
  |-- controllers
    |-- CourseController.js
  |-- services
    |-- CourseService.js
```
- **script_database.sql**: Script para gerar o banco de dados;
- **variables.env**: Arquivo com informações de porta de banco de dados;
- **src/db.js**: Conexão com o banco de dados;
- **src/routes.js**: Configuração de rotas;
- **src/server.js**: Configuração do servidor;
- **src/controllers/CourseController.js**: Arquivo de controller;
- **src/services/CourseService.js**: Arquivo de serviços;

## Instalação e Execução

Após clonar o projeto em sua máquina, para instalar as dependências, execute no seu terminal:

```bash
npm install
```

Na raiz do seu projeto, se necessário ajuste o aquivo **variables.env** com as configurações do seu banco (host, user, password). Em seguida execute o arquivo **script_database.sql** no seu banco de dados para criar o banco e as tabelas necessárias para a execução do projeto.

Com as dependências instaladas e o banco criado, execute no seu terminal:

```bash
npm start
```

## Contato

* [Linkedin](https://www.linkedin.com/in/tatiane-pirico-oyakawa/)
* [GitHub](https://github.com/TatianePirico)

