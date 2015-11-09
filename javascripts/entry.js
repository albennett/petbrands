// Setting up paths for require


requirejs.config({
  baseUrl: "./javascripts",
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  },
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
  }
});

require(
  ["jquery", "bootstrap", "main"], 
    function($, bootstrap, main) {
 
});

