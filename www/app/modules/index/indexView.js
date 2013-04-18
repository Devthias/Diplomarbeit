// Filename: index.js

define([
	'jquery',
	'kendo',
	'../index/indexViewModel'
], function($, Kendo, indexViewModel){

	var _viewModel = new indexViewModel();

	function IndexView(){

	};

	return {
		initialize: function(initEvt){
			var ua = navigator.userAgent.toLowerCase();
			var isAndroid = ua.indexOf("android") > -1;
			if(isAndroid) {
				$('#logoWhite').show();
				$('#logoBlack').hide();
			}
			else{
				$('#logoWhite').hide();
				$('#logoBlack').show();
			}
			
			// To navigate in phone mode, we shouldn't use a 'data-target' attribute. Remove it on phones!
			if(!app.isTablet){
				$(document).find('*[data-role]').each(function(index){
		    		$(this).removeAttr('data-target');
				});
			}
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