define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function OrderTimeViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), OrderTimeViewModel.prototype);
	};

	OrderTimeViewModel.prototype = Kendo.observable({});

	OrderTimeViewModel.prototype.textArray = ['orderTime', 'backButton'];

	OrderTimeViewModel.prototype.dialogTexts = {};

	OrderTimeViewModel.prototype.reloadDialogTexts = function(){
		OrderTimeViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return OrderTimeViewModel;

});
