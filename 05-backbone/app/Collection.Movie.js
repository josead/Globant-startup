define(['backbone','app/Model.Movie'], 
	function (Backbone, Movie) {
		return new Backbone.Collection.extend({
			model: Movie
		});
});