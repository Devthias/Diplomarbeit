// Filename: queryBuilder.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

	function MessageFactory(){};

	MessageFactory.prototype.clockInOut = '/clockInOut';

  MessageFactory.prototype.getServiceUrl = function(model){

  	console.log(model);
  	var baseUrl = localStorage.getItem('ServerUrl');
  	//var query = baseUrl + this[model];
     var query = 'http://192.168.192.6/RunTime.WebServices/BookingService.svc/ClockInOut';
  	return query;

  };

  return MessageFactory;
  
});