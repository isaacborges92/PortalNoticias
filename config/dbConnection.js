var mysql = require('mysql');

//Evitar que no autoload a função seja executa
var connMySQL = function(){
	console.log('Conexão feita com o BD');
	return connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'bear',
		database: 'portal_noticias'
	});
}

module.exports = function(){
	console.log('Módulo de conexão carregado');
	return connMySQL;
}

