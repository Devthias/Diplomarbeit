// Filename: absenceTimeView.js

define([
	'jquery',
	'kendo',
	'../absenceTime/absenceTimeViewModel'
], function($, Kendo, absenceTimeViewModel){

	var _viewModel = new absenceTimeViewModel();

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