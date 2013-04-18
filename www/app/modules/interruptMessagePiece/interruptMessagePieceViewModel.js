define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function InterruptMessagePieceViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), InterruptMessagePieceViewModel.prototype);
	};

	InterruptMessagePieceViewModel.prototype = Kendo.observable({});

	InterruptMessagePieceViewModel.prototype.textArray = ['interruptMessagePiece', 'backButton'];

	InterruptMessagePieceViewModel.prototype.dialogTexts = {};

	InterruptMessagePieceViewModel.prototype.reloadDialogTexts = function(){
		InterruptMessagePieceViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return InterruptMessagePieceViewModel;

});
