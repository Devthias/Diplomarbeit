// Filename: historyView.js

define([
	'jquery',
	'kendo',
	'../halfFullDayAbsence/halfFullDayAbsenceViewModel'
], function($, Kendo, halfFullDayAbsenceViewModel){

	var _viewModel = new halfFullDayAbsenceViewModel();

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