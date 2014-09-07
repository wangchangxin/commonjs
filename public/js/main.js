
require.config({
    baseUrl: '/public/js',
    paths: {
        css: "requirejs/css.min",
        jquery: 'jquery/jquery-1.8.3',
        underscore:'mvc/underscore',
        backbone:'mvc/backbone-min',
        localstorage:'mvc/backbone.localStorage',
        jPrice:'jPrice'

    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        localstorage:{
            deps:['backbone']
        },
        jPrice: {
            deps: [ 'css!style/style.css']
        }
    }
});


