// Filename: worktimeView.js

define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	var _viewModel = Kendo.observable({

		//
		// Properties
		//
		init: function(){
			this.reloadDialogTexts();
			this.selectedLanguage = localStorage.getItem('currentLanguage');
			Kendo.bind($("#view"), this);
		},

		textArray: ['worktime', 'backButton'],

		dialogTexts: {},

		reloadDialogTexts: function(){
			this.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
		},

  });

	function WorktimeView(){

	};

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