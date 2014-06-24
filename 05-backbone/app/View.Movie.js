define(['backbone'],
	function (Backbone){
	Movie = Backbone.View.extend({
		tagName: 'div',

		className: 'movie',

		template: _.template( $('#movieTemplate').html()),

		initialize: function() {
			this.model.on('change', this.render, this);
			this.model.on('destroy', this.remove, this);
		},

		events: {
			'click .edit': 'editMovie',
			'click .remove': 'destroy'
		},

		render: function() {
			if (!this.model.get('image')) {
				this.setImg(this,0);
			}
			this.$el.html( this.template(this.model.toJSON()) );
			return this;
		},

		setImg: function(movie,i) {
			
			var input= this.model.get('title') + '+poster+movie';
			$.getJSON("https://ajax.googleapis.com/ajax/services/search/images?callback=?", {
		    q: input,
		    v: '1.0'
			}, function(data) {
				var src = data.responseData.results[i].url;
				movie.$el.find('.image').attr("src", src);
				//movie.model.set('image',data.responseData.results[i].url);
			});
		},

		editMovie: function() {
			var newTitle = prompt('Insert new title.', this.model.get('title'));
			var newGenre = prompt('Insert new genre.', this.model.get('genre'));
			var newYear = prompt('Insert new year.', this.model.get('year'));

			this.model.set('title',newTitle);
			this.model.set('genre',newGenre);
			this.model.set('year',newYear);
		},

		destroy: function() {
			this.model.destroy();
		},

		remove: function() {
			this.$el.remove();
		}
	});

	return Movie;
});