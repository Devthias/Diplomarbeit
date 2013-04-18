// Filename: navbarView.js

define([
	'jquery',
	'kendo',
	'../navbar/navbarViewModel'
], function($, Kendo, navbarViewModel){

	var _viewModel = new navbarViewModel();

	function IndexView(){};

	IndexView.prototype = {
		initialize: function(initEvt){

		},

		beforeShow: function(beforeShowEvt){
			if(_viewModel !== undefined)
				_viewModel.reloadDialogTexts();
		},

		show: function(showEvt){

		},

		viewModel: _viewModel,
	};

  return (IndexView);

});