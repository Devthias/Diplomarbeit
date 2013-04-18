// Filename: clockInOutViewModel.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'helper',
	'models/clockInOut',
	'persistenceManager'
], function($, Kendo, LanguageManager, Helper, ClockInOut, PersistenceManager){

	function ComeLeaveViewModel(){
		var absence = Helper.getQueryString('absence');

		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), ComeLeaveViewModel.prototype);
	};

	ComeLeaveViewModel.prototype = Kendo.observable({});

	//
	// Properties
	//
	ComeLeaveViewModel.prototype.dataSource = new Kendo.data.DataSource({
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
	});
	ComeLeaveViewModel.prototype.persistenceManager = new PersistenceManager();
	ComeLeaveViewModel.prototype.model = new ClockInOut();
	ComeLeaveViewModel.prototype.textArray = ['timeTypeLabel', 'absenceLabel','dateLabel', 'timeLabel', 'bookLabel', 'comeLeaveLabel', 'comeLeave', 'backButton', 'comment','clockInOut'];
	ComeLeaveViewModel.prototype.dialogTexts = {};

	//
	// Methods
	//
	ComeLeaveViewModel.prototype.reloadDialogTexts = function(){
		ComeLeaveViewModel.prototype.set('dialogTexts', LanguageManager.getLanguageStrings(this.textArray));
	};

	ComeLeaveViewModel.prototype.sendBooking = function(e){

		/*this.dataSource.add(this.model);
		console.log(this.dataSource.data());
		this.dataSource.sync();
		*/

		var request = {
			data: this.model,
			type: 'insert',
			model: 'clockInOut'
		}

		this.persistenceManager.saveRequest(request, this.sendBookingCompleted);

	};

	ComeLeaveViewModel.prototype.absenceSwitchChanged = function(e){

		if(this.model.Absence === true){
			$('#absence').show();
		}
		else{
			$('#absence').hide();
		}
	};

	//
	// Eventhandlers
	//
	ComeLeaveViewModel.prototype.sendBookingCompleted = function(response){
		navigator.notification.alert('Buchung gespeichert', this.notificationCallback, 'Erfolgreich', 'Ok');
	};

	ComeLeaveViewModel.prototype.notificationCallback = function(){

	};

  return ComeLeaveViewModel;

});
