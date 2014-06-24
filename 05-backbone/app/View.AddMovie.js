define(['backbone','app/Model.Movie'],
	function(Backbone,Movie){
		// AddMovie Listener
		return Backbone.View.extend({

			el: '.MovieForm',

			events: {
				'submit': 'submit'
			},

			initialize: function() {

			},

			submit: function (e) {
				e.preventDefault();
				var newMovieTitle = $(e.currentTarget).find('input[name=title]').val();
				var newMovieGenre = $(e.currentTarget).find('input[name=genre]').val();
				var newMovieYear = $(e.currentTarget).find('input[name=year]').val();
				
				var newMovie = new Movie({title:newMovieTitle, genre:newMovieGenre, year:newMovieYear})
				console.log(newMovie);
				this.collection.add(newMovie);
			}

		});
});