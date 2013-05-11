// Filename: settingsView.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'models/settings'
], function($, Kendo, languageManager, Settings){

	var _viewModel = Kendo.observable({

    //
    // Properties
    //
		settings: new Settings(),
		textArray: ['languageLabel', 'synchronisationLabel', 'backButton', 'isTerminal', 'settings', 'loginHeader', 'connectionHeader'],
		dialogTexts: {},

    
    //
    // Constructor
    //
  	inti: function(){
			this.reloadDialogTexts();
			Kendo.bind($("#view"), this);
		},


		//
		// Methods
		//
		reloadDialogTexts: function(){
			this.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
		},

		//
		// Eventhandlers
		//
		SettingsChanged: function(e){
			this.settings.save();
			this.reloadDialogTexts();
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