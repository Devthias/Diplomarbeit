// Filename: clockInOutView.js

define([
	'jquery',
	'kendo',
	'../clockInOut/clockInOutViewModel'
], function($, Kendo, ClockInOutViewModel){

	var _viewModel = new ClockInOutViewModel();

	return {
		initialize: function(initEvt){
			var validator = $("#clockInOut").kendoValidator().data("kendoValidator"),
      status = $(".status");
		},

		beforeShow: function(beforeShowEvt){
			if(_viewModel !== undefined){
				_viewModel.reloadDialogTexts();
			}
		},

		show: function(showEvt){

		},

		viewModel: _viewModel,
	}

});