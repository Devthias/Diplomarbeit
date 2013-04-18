define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function SettingsViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), SettingsViewModel.prototype);
	};

	SettingsViewModel.prototype = Kendo.observable({});

	SettingsViewModel.prototype.textArray = ['userLabel', 'passwordLabel', 'languageLabel', 'synchronisationLabel', 'serverLabel', 'clientLabel', 'backButton'];

	SettingsViewModel.prototype.dialogTexts = {};

	SettingsViewModel.prototype.languageSelectionChanged = function(e){
		localStorage.setItem('currentLanguage', this.selectedLanguage);
		this.reloadDialogTexts();
	};

	SettingsViewModel.prototype.reloadDialogTexts = function(){
		console.log('reloaded');
		SettingsViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

	SettingsViewModel.prototype.selectedLanguage = "";

	SettingsViewModel.prototype.user = "";

  return SettingsViewModel;

});
