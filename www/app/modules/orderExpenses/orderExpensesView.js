// Filename: orderExpensesView.js

define([
	'jquery',
	'kendo',
	'../orderExpenses/orderExpensesViewModel'
], function($, Kendo, orderExpensesViewModel){

	var _viewModel = new orderExpensesViewModel();

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