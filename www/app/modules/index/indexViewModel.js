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

	IndexViewModel.prototype.textArray = ['clockInOut', 'clockInOutAbsence', 'absenceCorrection', 'absenceRange', 'absenceTime', 'halfFullDayAbsence', 'interruptMessage', 'timeCorrections', 'backButton', 'requests'];

	IndexViewModel.prototype.dialogTexts = {};

	IndexViewModel.prototype.reloadDialogTexts = function(){
		IndexViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return IndexViewModel;

});