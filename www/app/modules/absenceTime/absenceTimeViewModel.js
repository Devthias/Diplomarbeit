define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function AbsenceTimeViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), AbsenceTimeViewModel.prototype);
	};

	AbsenceTimeViewModel.prototype = Kendo.observable({});

	AbsenceTimeViewModel.prototype.textArray = ['absenceTime', 'timeAmountLabel','timeTypeLabel','dateLabel','bookLabel', 'backButton'];

	AbsenceTimeViewModel.prototype.dialogTexts = {};

	AbsenceTimeViewModel.prototype.reloadDialogTexts = function(){
		AbsenceTimeViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return AbsenceTimeViewModel;

});
