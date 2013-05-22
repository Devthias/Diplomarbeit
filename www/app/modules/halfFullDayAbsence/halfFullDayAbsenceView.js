// Filename: historyView.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'models/halfFullDayAbsence',
	'persistenceManager'
], function($, Kendo, languageManager, HalfFullDayAbsence, PersistenceManager){

	var _viewModel = Kendo.observable({

		//
		// Properties
		//
		persistenceManager: new PersistenceManager(),
		textArray: ['halfFullDayAbsence','halfFullDayAbsenceMessage', 'backButton', 'bookLabel', 'dateFrom', 'dateTo', 'dayPart', 'morning', 'fullDay', 'afternoon', 'timeTypeLabel'],
		dialogTexts: {},
		model: new HalfFullDayAbsence(),


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
				model: 'halfFullDayAbsence'
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

			$('.morningLabel').each(function(){
				$(this).text(languageManager.getLanguageString('morning'));
			});
			$('.fullDayLabel').text(languageManager.getLanguageString('fullDay'));
			$('.afternoonLabel').text(languageManager.getLanguageString('afternoon'));

			if(_viewModel !== undefined)
				_viewModel.reloadDialogTexts();
		},

		show: function(showEvt){

		},

		viewModel: _viewModel,

	}

});