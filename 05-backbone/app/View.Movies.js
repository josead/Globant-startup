define(['backbone','app/Movie'],
	function (Backbone, Movie) {
		Movies = Backbone.View.extend({
			tagName: 'div',

			className: 'moviesLibrary',

			initialize: function() {
				this.collection.on('add', this.addOne, this)
			},

			render: function () {
				this.collection.each(this.addOne, this);
			},

			addOne: function (movie) {
				var movieView = new Movie({ model: movie});
				this.$el.append(movieView.render().el)
			}

		});
		return Movies;
});