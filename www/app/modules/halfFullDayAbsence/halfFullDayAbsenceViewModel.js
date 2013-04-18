define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function HalfFullDayAbsenceViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), HalfFullDayAbsenceViewModel.prototype);
	};

	HalfFullDayAbsenceViewModel.prototype = Kendo.observable({});

	HalfFullDayAbsenceViewModel.prototype.textArray = ['halfFullDayAbsenceMessage', 'backButton'];

	HalfFullDayAbsenceViewModel.prototype.dialogTexts = {};

	HalfFullDayAbsenceViewModel.prototype.reloadDialogTexts = function(){
		HalfFullDayAbsenceViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return HalfFullDayAbsenceViewModel;

});
