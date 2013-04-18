// Filename: interruptMessagePieceView.js

define([
	'jquery',
	'kendo',
	'../interruptMessagePiece/interruptMessagePieceViewModel'
], function($, Kendo, interruptMessagePieceViewModel){

	var _viewModel = new interruptMessagePieceViewModel();

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