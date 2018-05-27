module.exports = function(app){
	app.get('/formulario_inclusao', function(req, res){
		res.render("admin/form_add_noticia");
	});

	app.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		//Express Validator
		req.assert('titulo', 'Título é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo é obrigatório').notEmpty();
		req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
		req.assert('autor', 'Autor é obrigatório').notEmpty();
		req.assert('data_noticia', 'Data é obrigatório').isISO8601();
		req.assert('noticia', 'Notícia é obrigatório').notEmpty();
		

		if(req.validationErrors()){
			res.render("admin/form_add_noticia");
			return;
		}

		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.salvarNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});

	});
	
};