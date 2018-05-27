//Guarda a configuração do servidor
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs'); //Alterar o motor de geração de views
app.set('views', './app/views'); //Diretório padrão das views

app.use(bodyParser.urlencoded({extended: true})); //Incluir middleware
app.use(expressValidator()); //Incluir middleware

//Inclui as rotas no servidor
consign().include('app/routes')
		 .then('config/dbConnection.js') //Necessário informar a extensão
		 .then('app/models')
		 .into(app)

module.exports = app;
