// Filename: index.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'models/clockInOut',
	'persistenceManager',
], function($, Kendo, languageManager, ClockInOut, PersistenceManager){

	var _viewModel = Kendo.observable({

		//
		// Properties
		//
    persistenceManager: new PersistenceManager(),
		textArray: ['clockInOut', 'clockInOutAbsence', 'absenceCorrection', 'absenceRange', 'absenceTime', 'halfFullDayAbsence', 'interruptMessage', 'timeCorrections', 'backButton', 'settings', 'timeData', 'startStop', 'worktime', 'absences', 'synchronisationLabel', 'home'],
		dialogTexts: {},


		//
		// Constructor
		//
		init: function(){
			this.reloadDialogTexts();
			this.selectedLanguage = localStorage.getItem('currentLanguage');
			Kendo.bind($("#view"), this);
		},

		//
		// Methods
		//
		reloadDialogTexts: function(){
			this.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
		},
    sendBooking: function(e){

    	app.showLoadingIndicator();

    	var model = new ClockInOut();
    	model.PersonId = app.loginInformation.PersonId;
    	model.Date = new Date();
    	model.Time = new Date();

			var request = {
				data: model.getMessageObject(),
				type: 'POST',
				model: 'clockInOut'
			}

			this.persistenceManager.POSTRequest(request, this.sendBookingCompleted, this.bookingFailed);

		},


		//
		// Eventhandlers
		//
		sendBookingCompleted: function(response){

    	app.hideLoadingIndicator();

			console.log(response);
			navigator.notification.alert('Buchung gespeichert', this.notificationCallback, 'Erfolgreich', 'Ok');

		},
		bookingFailed: function(response){

		},
  });

	function IndexView(){

	};

	return {
		initialize: function(initEvt){
			var ua = navigator.userAgent.toLowerCase();
			var isAndroid = ua.indexOf("android") > -1;
			if(isAndroid) {
				$('#logoWhite').show();
				$('#logoBlack').hide();
			}
			else{
				$('#logoWhite').hide();
				$('#logoBlack').show();
			}
			
			// To navigate in phone mode, we shouldn't use a 'data-target' attribute. Remove it on phones!
			if(!app.isTablet){
				$(document).find('*[data-role]').each(function(index){
		    		$(this).removeAttr('data-target');
				});
			}
		},

		beforeShow: function(beforeShowEvt){
			console.log('beforeShow');
			if(!app.isTablet){
				$('#startStopButton').show();
			}
			if(_viewModel !== undefined)
				_viewModel.reloadDialogTexts();
		},

		show: function(showEvt){

		},

		viewModel: _viewModel,

	}

});