define(['backbone','app/Movie'], 
	function (Backbone, Movie) {
		Movies = Backbone.Collection.extend({

			model: Movie
			
		});
		return Movies;
});