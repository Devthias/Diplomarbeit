define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function IndexViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), IndexViewModel.prototype);
	};

	IndexViewModel.prototype = Kendo.observable({});

	IndexViewModel.prototype.textArray = ['clockInOut', 'clockInOutAbsence', 'absenceRange', 'absenceTime', 'absenceHalfFullDay', 'orderTime', 'orderPiece', 'orderExpenses', 'interruptMessage', 'interruptMessagePiece', 'finishedMessage', 'finishedMessagePiece', 'finishedMessageShouldBe', 'presenceAbsence', 'contractServices', 'orderProgress', 'backButton'];

	IndexViewModel.prototype.dialogTexts = {};

	IndexViewModel.prototype.reloadDialogTexts = function(){
		IndexViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return IndexViewModel;

});