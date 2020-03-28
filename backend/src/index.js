// Rota: local onde a página estara
// Recurso: uma "classe" do site (exemplo users)

//    Metodos HTTP:
// GET: Buscar informação
// POST: Criar uma informação
// PUT: Alterar uma informação
// DELETE: Deletar uma informação

//    Tipos de Parametros:
// Query Params: Parametros nomeados enviados na rota apos o simbolo de '?' (filtros, paginacao)
// Route Params: Parametros utilizados para identificar recursos
// Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos

//    Bancos de Dados:
// SQL: MySQL, PostgresSQL, Oracle, SQLite
// NoSQL: MongoDB, CouchDB, etc

//    Tipos de consulta:
// Driver: SELECT * FROM users
// Query Builder: table(user)

const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

// Utilizado para controlar quem pode acessar a aplicacao
app.use(cors());
// Converter o que vem em json da aplicacao para JavaScript
app.use(express.json())
app.use(routes);



app.listen(3333);