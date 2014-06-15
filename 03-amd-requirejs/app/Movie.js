define(function(){
function Movie(name) {

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
};

Movie.prototype.suscribe = function(event,callback) {
	this.Event[event] = callback;
};

Movie.prototype.play = function () {
	this.updateEvent('play');
	console.log('playing movie');
	return this;
};

Movie.prototype.stop = function () {
	this.updateEvent('stop');
	console.log('movie stoped');
	return this;
};

Movie.prototype.updateEvent = function (event) {
if (this.Event[event] != undefined)
	this.Event[event](this);
};

return Movie;
});