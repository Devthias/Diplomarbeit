define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function AbsenceRegionViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), AbsenceRegionViewModel.prototype);
	};

	AbsenceRegionViewModel.prototype = Kendo.observable({});

	AbsenceRegionViewModel.prototype.textArray = ['timeFromLabel','dateLabel', 'timeToLabel', 'bookLabel', 'absenceRange','timeTypeLabel', 'backButton'];

	AbsenceRegionViewModel.prototype.dialogTexts = {};

	AbsenceRegionViewModel.prototype.reloadDialogTexts = function(){
		AbsenceRegionViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return AbsenceRegionViewModel;

});
