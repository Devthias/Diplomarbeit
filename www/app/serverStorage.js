// Filename: serverStorage.js

define([
  'jquery',
  'messageFactory'
], function($, MessageFactory){
  
	function ServerStorage(){};

	// Führt einen POST Request aus
	ServerStorage.prototype.saveData = function(request, callback){

		// Die MessageFactory selektiert die korrekte URL
		var messageFactory = new MessageFactory();
  	var url = messageFactory.getServiceUrl(request.model);

  	console.log(url);

  	// Aufruf des Webservices
  	$.ajax({
      url: url,
      type: 'POST',
			data: JSON.stringify(request.data),
			contentType: "application/json",
      crossDomain: true,
			success: function (result) {
				console.log("POST result: " + JSON.stringify(result));
			},
			error: function(responseData, textStatus, jqXHR) {
				console.log(jqXHR);
			}
    });
	};

	// Führt einen GET Request aus
	ServerStorage.prototype.readData = function(request, callback){

		var messageFactory = new MessageFactory();
		var url = messageFactory.getServiceUrl(request.model);

		console.log('get url: ' + url);

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'jsonp',
			jsonp: false,
			jsonpCallback: request.callback,
			success: callback,

		})
		.fail(this.errorHandler);
	};

	// Führt einen PUT Request aus
	ServerStorage.prototype.updateData = function(request, callback){

		var messageFactory = new MessageFactory();
		var url = messageFactory.getServiceUrl(request.model);

		$.ajax({
			url: url,
			type: 'PUT',
			dataType: 'jsonp',
			jsonp: false,
			jsonpCallback: request.callback
		}).done(callback)
		.fail(this.errorHandler);
	};

	// Führt einen DELETE Request aus
	ServerStorage.prototype.deleteData =  function(request, callback){

		var messageFactory = new MessageFactory();
		var url = messageFactory.getServiceUrl(request.model);

		$.ajax({
			url: url,
			type: 'DELETE',
			dataType: 'jsonp',
			jsonp: false,
			jsonpCallback: request.callback
		}).done(callback)
		.fail(this.errorHandler);
	};

  return ServerStorage;

});