// Filename: historyView.js

define([
	'jquery',
	'kendo',
	'../history/historyViewModel'
], function($, Kendo, historyViewModel){

	var _viewModel = new historyViewModel();

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