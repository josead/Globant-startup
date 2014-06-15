function Movie() {
	var attributes = [];
	this.Event = [];
	attributes.title = name;

	this.set = function(attr,value) {
		attributes[attr] = value;
		return this;
	}
	this.get = function(attr) {
		return attributes[attr];
	}
	return this;
}

Movie.prototype.suscribe = function(event,callback) {
	this.Event[event] = callback;
}

Movie.prototype.play = function () {
	this.updateEvent('play');
	console.log('playing movie');
	return this;
}

Movie.prototype.stop = function () {
	this.updateEvent('stop');
	console.log('movie stoped');
	return this;
}

Movie.prototype.updateEvent = function (event) {
if (this.Event[event] != undefined)
	this.Event[event](this);
}

function MovieObserver(movie) {
	movie.suscribe('play', function(movie) {
		 console.log(movie.get("title")+" is playing right now...");
	});
	movie.suscribe('stop', function(movie) {
		console.log(movie.get("title")+" is stoped right now...");
	});
}

function DownlodableMovie() {
	url = '';
	this.download = function() {
		console.log("downloading "+this.attributes["title"]);
	}
}

var Social = {
	share : function(name) {
		console.log('Shared : '+this.get('title')+' with '+name);

	},
	like : function() {
		console.log('you like '+this.get('title')+' now.')
	}
}


DownlodableMovie.prototype = new Movie();

Object.prototype.addMixin = function (mixin) {
	for (var prop in mixin) {
		if (mixin.hasOwnProperty(prop)) {
			this.prototype[prop] = mixin[prop];
		}
	}
}

// add mixin propertys
Movie.addMixin(Social);


