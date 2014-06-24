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


requirejs(['backbone','app/Model.Movie','app/View.Movie','app/View.AddMovie','app/View.Movies','app/Collection.Movie'],
function (Backbone,Movie,ViewMovie,ViewAddMovie,ViewMovies,CollectionMovies){

	//$.getJSON('app/resources/movies.json').done(function (MoviesPack) {
	// following must be working on movies.json
	var MoviesPack = [
		{
			"title":"lord of the rings: the comunity of the ring",
			"year": 2006,
			"genre":"Adventures"
		},
		{
			"title":"lord of the rings: two towers",
			"year": 2007,
			"genre":"Adventures"
		},
		{
			"title":"lord of the rings: return of the king",
			"year": 2008,
			"genre":"Adventures"
		},
		{
			"title":"Let's make a porno",
			"year": 2010,
			"genre":"Comedian"
		},
		{
			"title":"Argo",
			"year": 2012,
			"genre":"Drama/Historical"
		},
		{
			"title":"Stargate",
			"year": 1990,
			"genre":"Ciencia Ficcion"
		},
		{
			"title":"Frozen",
			"year": 2013,
			"genre":"Animada"
		}
	];


	var movies = new CollectionMovies(MoviesPack);

	console.log(movies);
	var moviesViewer = new ViewMovies({collection: movies })
		
	var addMovieView = new ViewAddMovie({collection: movies });
		
	moviesViewer.render();
		
	$('#App').append(moviesViewer.el);



		
});