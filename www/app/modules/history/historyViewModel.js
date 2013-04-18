define([
	'jquery',
	'kendo',
	'languageManager',
	'persistenceManager'
], function($, Kendo, languageManager, PersistenceManager){

	function HistoryViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), HistoryViewModel.prototype);
	};

	HistoryViewModel.prototype = Kendo.observable({});

	//
	// Properties
	//
	HistoryViewModel.prototype.textArray = ['absenceLabel','dateLabel', 'timeLabel', 'bookLabel', 'comeLeaveLabel', 'backButton'];
	HistoryViewModel.prototype.dialogTexts = {};
	HistoryViewModel.prototype.reloadDialogTexts = function(){
		HistoryViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};
	HistoryViewModel.prototype.dataSource = new Kendo.data.DataSource({
		transport: {
			read: function(options) {
	    	var request = {
					model: 'clockInOut',
					type: 'select',
	    	};
	    	var persistenceManager = new PersistenceManager();
	      persistenceManager.readRequest(request, options.success);
	    }
		}
	});

	HistoryViewModel.prototype.reloadData = function(){
		this.dataSource.read();
	};

  return HistoryViewModel;

});
