define(['backbone','app/Model.Movie'], 
	function (Backbone, Movie) {
		return Backbone.Collection.extend({
			model: Movie
		});
});