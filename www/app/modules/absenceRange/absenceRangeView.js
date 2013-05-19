// Filename: absenceRangeView.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'models/absenceRange',
	'persistenceManager'
], function($, Kendo, languageManager, AbsenceRange, PersistenceManager){

	var _viewModel = Kendo.observable({

		//
		// Properties
		//
		persistenceManager: new PersistenceManager(),
		textArray: ['absenceRange','timeFromLabel','dateLabel', 'timeToLabel', 'bookLabel', 'absenceRange','timeTypeLabel', 'backButton', 'employee'],
		model: new AbsenceRange(),
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

			var request = {
				data: this.model.getMessageObject(),
				type: 'POST',
				model: 'absenceRange'
			}
			console.log(request);
			this.persistenceManager.POSTRequest(request, this.sendBookingCompleted);

		},


		//
		// Eventhandlers
		//
		sendBookingCompleted: function(response){

    	app.hideLoadingIndicator();

			console.log(response);
			navigator.notification.alert('Buchung gespeichert', this.notificationCallback, 'Erfolgreich', 'Ok');

		},

  });

	return {
		initialize: function(initEvt){

		},

		beforeShow: function(beforeShowEvt){
			if(_viewModel !== undefined)
				_viewModel.reloadDialogTexts();
		},

		show: function(showEvt){

		},

		viewModel: _viewModel,

	}

});