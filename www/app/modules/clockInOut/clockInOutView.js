// Filename: clockInOutView.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'helper',
	'models/clockInOut',
	'persistenceManager',
], function($, Kendo, LanguageManager, Helper, ClockInOut, PersistenceManager){

	var _viewModel = Kendo.observable({

    //
    // Properties,
    //
    textArray: ['timeTypeLabel', 'absenceLabel','dateLabel', 'timeLabel', 'bookLabel', 'comeLeaveLabel', 'comeLeave', 'backButton', 'comment','clockInOut', 'employee'],
    dialogTexts: {},
    persistenceManager: new PersistenceManager(),
		model: new ClockInOut(),
		dataSource: new Kendo.data.DataSource({
			data: this.model,
		  transport: {
		    create: function(options) {
		    	console.log('create called..');
		      create(db, options.data, options.success);
		    },
		    update: function(options){
		    	console.log('create called..');
		      create(db, options.data, options.success);
		    }
		  }
		}),


    // 
    // Constructor
    //
    init: function(){

			var absence = Helper.getQueryString('absence');

			this.reloadDialogTexts();
			this.selectedLanguage = localStorage.getItem('currentLanguage');
			Kendo.bind($("#view"), ComeLeaveViewModel.prototype);

    },


    //
    // Methods
    //
    reloadDialogTexts: function(){

			this.set('dialogTexts', LanguageManager.getLanguageStrings(this.textArray));

		},
    sendBooking: function(e){

    	app.showLoadingIndicator();

			var request = {
				data: this.model.getMessageObject(),
				type: 'POST',
				model: 'clockInOut'
			}

			this.persistenceManager.POSTRequest(request, this.sendBookingCompleted, this.bookingFailed);

		},
    absenceSwitchChanged: function(e){

			if(this.model.Absence === true){
				$('#absence').show();
			}
			else{
				$('#absence').hide();
			}

		},
    connect: function(e){

			this.getClientList();

		},
		reloadData: function(){

			this.getClientList();

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
		notificationCallback: function(){

		},

  });

	return {
		initialize: function(initEvt){

			var validator = $("#clockInOut").kendoValidator().data("kendoValidator"),
      status = $(".status");

		},

		beforeShow: function(beforeShowEvt){

			if(_viewModel !== undefined){
				_viewModel.reloadDialogTexts();
			}

		},

		show: function(showEvt){

		},

		viewModel: _viewModel,
	}

});