// Filename: main.js

require.config({
	paths: {
  	jquery: 'vendor/jquery/jquery.min',
  	kendo: 'vendor/kendo.mobile/kendo.mobile.min'
  },
	shim: {
    jquery:{
      exports: "jquery"
    },
		kendo: {
			deps: ['jquery'],
			exports: 'kendo'
		}
	}
});

var app;

require([
  	'app',

], function(App){
  app = App;
	app.initialize();
});