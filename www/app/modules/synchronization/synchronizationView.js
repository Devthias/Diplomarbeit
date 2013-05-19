// Filename: synchroniztionView.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'persistenceManager'
], function($, Kendo, LanguageManager, PersistenceManager){

	var _viewModel = Kendo.observable({

		//
		// Properties
		//
		textArray: ['synchronisationLabel', 'backButton', 'synchronizeButton','clockInOut','absenceRange','absenceTime','halfFullDayAbsence'],
		dialogTexts: {},
		reloadDialogTexts: function(){
			this.set('dialogTexts', LanguageManager.getLanguageStrings(this.textArray));
		},
		clockInOutDataSource: new Kendo.data.DataSource({
			transport: {
				read: function(options) {
					console.log('reload clockInOut');
		    	var request = {
						model: 'clockInOut',
						type: 'GET',
						mode: 'offline'
		    	};
		    	var persistenceManager = new PersistenceManager();
		      persistenceManager.GETRequest(request, options.success);
		    }
			}
		}),
		absenceRangeDataSource: new Kendo.data.DataSource({
			transport: {
				read: function(options) {
		    	var request = {
						model: 'absenceRange',
						type: 'GET',
						mode: 'offline'
		    	};
		    	var persistenceManager = new PersistenceManager();
		      persistenceManager.GETRequest(request, options.success);
		    }
			}
		}),
		absenceTimeDataSource: new Kendo.data.DataSource({
			transport: {
				read: function(options) {
		    	var request = {
						model: 'absenceTime',
						type: 'GET',
						mode: 'offline'
		    	};
		    	var persistenceManager = new PersistenceManager();
		      persistenceManager.GETRequest(request, options.success);
		    }
			}
		}),
		halfFullDayAbsenceDataSource: new Kendo.data.DataSource({
			transport: {
				read: function(options) {
		    	var request = {
						model: 'halfFullDayAbsence',
						type: 'GET',
						mode: 'offline'
		    	};
		    	var persistenceManager = new PersistenceManager();
		      persistenceManager.GETRequest(request, options.success);
		    }
			}
		}),


    // 
    // Constructor
    //
		init: function(){
			this.reloadDialogTexts();
			this.clockInOutDataSource.read();
			this.absenceRangeDataSource.read();
			this.absenceTimeDataSource.read();
			this.halfFullDayAbsenceDataSource.read();
			this.selectedLanguage = localStorage.getItem('currentLanguage');
			Kendo.bind($("#view"), this);
		},


		//
		// Methods
		//
		reloadData: function(){
			console.log('reload data');
			this.clockInOutDataSource.read();
			this.absenceRangeDataSource.read();
			this.absenceTimeDataSource.read();
			this.halfFullDayAbsenceDataSource.read();
		},

		readClockInOut: function(){

			var request = {
				model: 'clockInOut',
				type: 'GET',
				mode: 'offline'
    	};
    	var persistenceManager = new PersistenceManager();
      persistenceManager.GETRequest(request, this.readClockInOutCompleted);

		},

		readAbsenceRange: function(){

			var request = {
				model: 'absenceRange',
				type: 'GET',
				mode: 'offline'
    	};
    	var persistenceManager = new PersistenceManager();
      persistenceManager.GETRequest(request, this.readAbsenceRangeCompleted);

		},

		readAbsenceTime: function(){

			var request = {
				model: 'absenceTime',
				type: 'GET',
				mode: 'offline'
    	};
    	var persistenceManager = new PersistenceManager();
      persistenceManager.GETRequest(request, this.readAbsenceTimeCompleted);

		},

		readHalfFullDayAbsence: function(){

			var request = {
				model: 'halfFullDayAbsence',
				type: 'GET',
				mode: 'offline'
    	};
    	var persistenceManager = new PersistenceManager();
      persistenceManager.GETRequest(request, this.readHalfFullDayAbsenceCompleted);

		},

		synchronize: function(){

    	app.showLoadingIndicator();

    	console.log(JSON.stringify(this.clockInOutDataSource.data));

		},


		//
		// EventHandler
		//
		readClockInOutCompleted: function(){

		},

		readAbsenceRangeCompleted: function(){

		},

		readAbsenceTimeCompleted: function(){

		},

		readHalfFullDayAbsenceCompleted: function(){

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
			_viewModel.reloadData();
		},

		viewModel: _viewModel,

	}

});