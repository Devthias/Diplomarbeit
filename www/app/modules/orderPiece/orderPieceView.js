// Filename: orderPieceView.js

define([
	'jquery',
	'kendo',
	'../orderPiece/orderPieceViewModel'
], function($, Kendo, orderPieceViewModel){

	var _viewModel = new orderPieceViewModel();

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