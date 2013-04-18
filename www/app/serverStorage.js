// Filename: serverStorage.js

define([
  'jquery'
], function($){
  
	function ServerStorage(){};

	// Makes a POST call
	ServerStorage.prototype.saveData = function(request, callback){
		$.ajax({
			url: request.url,
			type: 'POST',
			dataType: 'jsonp',
			jsonp: false,
			jsonpCallback: request.callback
		}).done(callback)
		.fail(this.errorHandler);
	};

	// Makes a GET call
	ServerStorage.prototype.readData = function(request, callback){
		$.ajax({
			url: request.url,
			type: 'GET',
			dataType: 'jsonp',
			jsonp: false,
			jsonpCallback: request.callback
		}).done(callback)
		.fail(this.errorHandler);
	};

	// Makes a PUT call
	ServerStorage.prototype.updateData = function(request, callback){
		$.ajax({
			url: request.url,
			type: 'PUT',
			dataType: 'jsonp',
			jsonp: false,
			jsonpCallback: request.callback
		}).done(callback)
		.fail(this.errorHandler);
	};

	// Makes a DELETE call
	ServerStorage.prototype.deleteData =  function(request, callback){
		$.ajax({
			url: request.url,
			type: 'DELETE',
			dataType: 'jsonp',
			jsonp: false,
			jsonpCallback: request.callback
		}).done(callback)
		.fail(this.errorHandler);
	};

  return ServerStorage;

});