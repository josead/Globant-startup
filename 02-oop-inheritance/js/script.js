function Movie() {
	var attributes = [];
	this.Event = [];

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
	this.Event[event] = "event" callback;
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
	this.Event[event]();
}

function MovieObserver(movie) {

	movie.suscribe('play', function(movie) {
		 console.log(this.get("title")+" is playing right now...");
	});
	movie.suscribe('stop', function(movie) {
		console.log(this.get("title")+" is stoped right now...");
	});
}

function DownlodableMovie() {
	url = '';
	this.download = function() {
		console.log("downloading "+this.attributes["title"]);
	}
}

DownlodableMovie.prototype = new Movie();

var Social = {
	share : function() {
		//todo

	}

}
/*


*/