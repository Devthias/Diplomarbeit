// Filename: absenceRegionView.js

define([
	'jquery',
	'kendo',
	'../absenceRegion/absenceRegionViewModel'
], function($, Kendo, absenceRegionViewModel){

	var _viewModel = new absenceRegionViewModel();

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