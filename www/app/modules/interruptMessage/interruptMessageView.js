// Filename: interruptMessageView.js

define([
	'jquery',
	'kendo',
	'../interruptMessage/interruptMessageViewModel'
], function($, Kendo, interruptMessageViewModel){

	var _viewModel = new interruptMessageViewModel();

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