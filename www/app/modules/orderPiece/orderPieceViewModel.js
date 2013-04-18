define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function OrderPieceViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), OrderPieceViewModel.prototype);
	};

	OrderPieceViewModel.prototype = Kendo.observable({});

	OrderPieceViewModel.prototype.textArray = ['orderPiece', 'backButton'];

	OrderPieceViewModel.prototype.dialogTexts = {};
	
	OrderPieceViewModel.prototype.reloadDialogTexts = function(){
		OrderPieceViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return OrderPieceViewModel;

});
