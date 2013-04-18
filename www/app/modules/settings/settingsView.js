// Filename: settingsView.js

define([
	'jquery',
	'kendo',
	'../settings/settingsViewModel'
], function($, Kendo, settingsViewModel){

	var _viewModel = new settingsViewModel();

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