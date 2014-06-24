//configs
requirejs.config({
	baseUrl: 'lib',
	paths: {
		app: '../app',
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'jquery': {
			exports: '$'
		}
	}
});

requirejs(['backbone','app/Model.Movie','app/View.Movie','app/View.AddMovie','app/Collection.Movie'],
function (Backbone,Movie,ViewMovie,ViewAddMovie,CollectionMovies){

	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};


	$.getJSON('resources/movies.json').done(function(profile) {
		
		var movies = new CollectionMovies(profile);

		var moviesView = new ViewMovies({collection:movies})
		
		var addMovieView = new ViewAddMovie({collection:movies});
		
		moviesView.render();
		
		$('#App').append(moviesView.el);

		console.log(movies);

	});


		
});