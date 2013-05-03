// Filename: historyView.js

define([
	'jquery',
	'kendo',
	'../settings/loginViewModel'
], function($, Kendo, loginViewModel){

	var _viewModel = new loginViewModel();

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