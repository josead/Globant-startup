//configs
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        movie: '../app/Movie'
    }
});

requirejs(['app/main']);
