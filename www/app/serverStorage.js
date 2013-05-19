// Filename: serverStorage.js

define([
  'jquery',
  'messageFactory'
], function($, MessageFactory){
  
	function ServerStorage(){};

	// Makes a POST call
	ServerStorage.prototype.POSTData = function(request, callback, failedCallback){

		var messageFactory = new MessageFactory();
  	var url = messageFactory.getServiceUrl(request.model);

  	var jsonData = JSON.stringify(request.data);

  	console.log(jsonData);

  	$.ajax({
      url: url,
      type: 'POST',
			data: jsonData,
			contentType: "application/json",
      crossDomain: true,
      timeout: 1000,
			success: function (result) {
				callback(result);
			},
			error: function(responseData, textStatus, jqXHR) {
				failedCallback(responseData, textStatus, jqXHR);
			}
    });

	};

	// Makes a GET call
	ServerStorage.prototype.GETData = function(request, callback, failedCallback){

		var messageFactory = new MessageFactory();
		var url = messageFactory.getServiceUrl(request.model);

		$.ajax({
			url: url,
			type: 'GET',
			contentType: "application/json",
			data: JSON.stringify(request.data),
      crossDomain: true,
      timeout: 1000,
			success: function (result) {
				callback(result);
			},
			error: function(responseData, textStatus, jqXHR) {
				failedCallback(responseData, textStatus, jqXHR);
			}
		});

	};

	// Makes a PUT call
	ServerStorage.prototype.PUTData = function(request, callback, failedCallback){

		var messageFactory = new MessageFactory();
		var url = messageFactory.getServiceUrl(request.model);

		$.ajax({
			url: url,
			type: 'PUT',
			dataType: 'jsonp',
			jsonp: false,
			success: function (result) {
				callback(result);
			},
			error: function(responseData, textStatus, jqXHR) {
				failedCallback(responseData, textStatus, jqXHR);
			}
		});
	};

	// Makes a DELETE call
	ServerStorage.prototype.DELETEData =  function(request, callback, failedCallback){

		var messageFactory = new MessageFactory();
		var url = messageFactory.getServiceUrl(request.model);

		$.ajax({
			url: url,
			type: 'DELETE',
			dataType: 'jsonp',
			jsonp: false,
			success: function (result) {
				callback(result);
			},
			error: function(responseData, textStatus, jqXHR) {
				failedCallback(responseData, textStatus, jqXHR);
			}
		});
	};

  return ServerStorage;

});