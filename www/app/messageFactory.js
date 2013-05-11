// Filename: queryBuilder.js

define([
  'jquery',
  'kendo',
  'models/loginInformation',
], function($, Kendo, LoginInformation){

	function MessageFactory(){};

  MessageFactory.prototype.login = '/UserService.svc/Login';
	MessageFactory.prototype.clockInOut = '/BookingService.svc/ClockInOut';
  MessageFactory.prototype.absenceTime = '/BookingService.svc/AbsenceTime';
  MessageFactory.prototype.absenceRange = '/BookingService.svc/AbsenceRange';
  MessageFactory.prototype.halfFullDayAbsence = '/BookingService.svc/HalfFullDayAbsence';
  MessageFactory.prototype.getServiceUrl = function(model){

    console.log("model " + model);
    var loginInformation = new LoginInformation();
    var baseUrl = loginInformation.ServerUrl;
    var query = baseUrl + this[model];
    console.log('base url: ' + baseUrl);
    
    return query;

  };

  return MessageFactory;
  
});