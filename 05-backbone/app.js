//configs
requirejs.config({
	baseUrl: 'lib',
	paths: {
		app: '../app',
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery-2.1.1'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'jquery-2.1.1': {
			exports: '$'
		}
	}
});


requirejs(['backbone','app/Model.Movie','app/View.Movie','app/View.AddMovie','app/Collection.Movie'],
function (Backbone,Movie,ViewMovie,ViewAddMovie,CollectionMovies){


	var req = $.getJSON('app/resources/movies.json');

	console.log(req.responseText);

	var movies = new CollectionMovies(req.responseJSON);
	
	var moviesView = new ViewMovie({collection:movies})
	
	var addMovieView = new ViewAddMovie({collection:movies});
	
	
	moviesView.render();
	
	$('#App').append(moviesView.el);
		
});