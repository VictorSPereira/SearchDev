const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://victor:janela123@cluster0-shard-00-00-pq1yq.mongodb.net:27017,cluster0-shard-00-01-pq1yq.mongodb.net:27017,cluster0-shard-00-02-pq1yq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors({}))
app.use(express.json());
app.use(routes);
// Metodos http get, post, put, delete
//Tipos de parametros
// query params : request.query(filtros, ordenação, paginação)
// route params : request.params(identificar um recurso na alteração ou remoção)
// body : request.body (dados para criação ou alteração de um registro)

app.listen(3333);