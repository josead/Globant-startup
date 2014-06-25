define(['backbone'],
	function (Backbone){
	return Backbone.View.extend({
		tagName: 'div',

		className: 'movie',

		template: _.template($('#movieTemplate').html()),


		initialize: function() {
			this.model.on('change', this.render, this);
			this.model.on('destroy', this.remove, this);
			//this.listenTo(this.model, 'change', this.render);
			//this.listenTo(this.model, 'destroy', this.remove);
    },

		events: {
			'click #edit': 'showForm',
			'click #remove': 'destroy',
			'dblclick #front': 'showOptions',
			'submit' : 'editMovie',
			'mouseenter': 'toggle',
			'mouseleave': 'toggle'
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
				this.model.set({
						'genre': this.$el.find('.genre').val(),
						'year': this.$el.find('.year').val(),
						'title': this.$el.find('.title').val()});

				if (this.model.get('title')) {
					this.render();
					this.$el.find('#front').hide();
				}
				console.log(this.$el.find('.year').val());
		
		},

		destroy: function() {
			this.model.destroy();
		},

		remove: function() {
			this.$el.remove();
		},

		toggle: function() {
			this.$el.find('#front').slideToggle();
			this.$el.find('#options').fadeOut();
			//this.$el.find('.image').toggle();
		},

		showOptions: function() {
			this.$el.find('#options').fadeIn('fast');
		},

		showForm: function() {
			this.$el.html(_.template($('#formTemplate').html()));
		}

	});

});