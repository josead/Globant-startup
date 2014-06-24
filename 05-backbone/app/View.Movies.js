define(['backbone','app/View.Movie'],
	function (Backbone, MovieView) {
		return Backbone.View.extend({
			tagName: 'div',

			className: 'moviesLibrary',

			initialize: function() {
				this.collection.on('add', this.addOne, this);
				//this is not working
 				//this.listenTo(this.model, 'add', this.addOne);
			},

			render: function () {
				this.collection.each(this.addOne, this);
			},

			addOne: function (movie) {
				var movieView = new MovieView({ model: movie });
				console.log(movieView);
				this.$el.append(movieView.render().el);
			}

		});

});