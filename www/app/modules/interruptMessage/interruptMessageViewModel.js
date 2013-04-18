define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function InterruptMessageViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), InterruptMessageViewModel.prototype);
	};

	InterruptMessageViewModel.prototype = Kendo.observable({});

	InterruptMessageViewModel.prototype.textArray = ['interruptMessage', 'backButton'];

	InterruptMessageViewModel.prototype.dialogTexts = {};

	InterruptMessageViewModel.prototype.reloadDialogTexts = function(){
		InterruptMessageViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return InterruptMessageViewModel;

});
