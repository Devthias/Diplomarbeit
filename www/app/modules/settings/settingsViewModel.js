define([
	'jquery',
	'kendo',
	'languageManager',
	'models/settings'
], function($, Kendo, languageManager, Settings){

	function SettingsViewModel(){
		this.reloadDialogTexts();
		Kendo.bind($("#view"), SettingsViewModel.prototype);
	};

	SettingsViewModel.prototype = Kendo.observable({});

	SettingsViewModel.prototype.textArray = ['languageLabel', 'synchronisationLabel', 'backButton', 'isTerminal', 'settings', 'loginHeader'];

	SettingsViewModel.prototype.dialogTexts = {};

	SettingsViewModel.prototype.SettingsChanged = function(e){
		this.settings.save();
		this.reloadDialogTexts();
	};

	SettingsViewModel.prototype.reloadDialogTexts = function(){
		SettingsViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

	SettingsViewModel.prototype.settings = new Settings();

  return SettingsViewModel;

});
