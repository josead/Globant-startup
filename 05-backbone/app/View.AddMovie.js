
define(['backbone','app/Model.Movie'],
function(Backbone,Movie){
// AddMovie Listener
return Backbone.View.extend({

	el: '.newMovieForm',

	events: {
		'submit': 'submit'
	},

		initialize: function() {

	},

	submit: function (e) {
		e.preventDefault();
		var newMovieTitle = $(e.currentTarget).find('input[class=title]').val();
		var newMovieGenre = $(e.currentTarget).find('input[class=genre]').val();
		var newMovieYear = $(e.currentTarget).find('input[class=year]').val();

		var newMovie = new Movie({title:newMovieTitle, genre:newMovieGenre, year:newMovieYear})
		newMovie.set({
						'genre': newMovieGenre,
						'year': newMovieYear,
						'title': newMovieTitle});
		console.log(newMovie);
		this.collection.add(newMovie);
	}

});
});