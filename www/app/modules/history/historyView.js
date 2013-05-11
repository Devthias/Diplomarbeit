// Filename: historyView.js

define([
	'jquery',
	'kendo',
	'persistenceManager'
], function($, Kendo, PersistenceManager){

	var _viewModel = Kendo.observable({

		//
		// Properties
		//
		textArray: ['absenceLabel','dateLabel', 'timeLabel', 'bookLabel', 'comeLeaveLabel', 'backButton'],
		dialogTexts: {},
		reloadDialogTexts: function(){
			this.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
		},
		dataSource: new Kendo.data.DataSource({
			transport: {
				read: function(options) {
		    	var request = {
						model: 'clockInOut',
						type: 'GET',
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
			this.selectedLanguage = localStorage.getItem('currentLanguage');
			Kendo.bind($("#view"), this);
		},


		//
		// Methods
		//
		reloadData: function(){
			this.dataSource.read();
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