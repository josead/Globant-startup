requirejs(['movie'],
	function (Movie, MovieObserver) {
		var spider = new Movie("The Amazing Spider-Man");

		spider.play();
		spider.stop();
	}
);