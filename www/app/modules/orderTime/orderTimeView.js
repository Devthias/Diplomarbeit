// Filename: orderTimeView.js

define([
	'jquery',
	'kendo',
	'../orderTime/orderTimeViewModel'
], function($, Kendo, orderTimeViewModel){

	var _viewModel = new orderTimeViewModel();

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