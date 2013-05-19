// Filename: queryBuilder.js

define([
  'jquery',
  'kendo',
  'models/connectionInformation',
], function($, Kendo, ConnectionInformation){

	function MessageFactory(){};

  MessageFactory.prototype.login = '/UserService.svc/login';
  MessageFactory.prototype.connect = '/UserService.svc/connect';
	MessageFactory.prototype.clockInOut = '/BookingService.svc/ClockInOut';
  MessageFactory.prototype.absenceTime = '/BookingService.svc/AbsenceTime';
  MessageFactory.prototype.absenceRange = '/BookingService.svc/AbsenceRange';
  MessageFactory.prototype.halfFullDayAbsence = '/BookingService.svc/HalfFullDayAbsence';
  MessageFactory.prototype.getServiceUrl = function(model){

    var connectionInformation = new ConnectionInformation();
    var baseUrl = connectionInformation.ServerUrl;
    var query = baseUrl + this[model];
    console.log('base url: ' + baseUrl);
    
    return query;

  };

  return MessageFactory;
  
});