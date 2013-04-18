define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function NavbarViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		if(app !== undefined)	NavbarViewModel.prototype.set('isPhone', app.isTablet);
		Kendo.bind($("#view"), NavbarViewModel.prototype);
	};

	NavbarViewModel.prototype = Kendo.observable({});

	NavbarViewModel.prototype.textArray = ['home', 'history', 'synchronisation', 'settings', 'backButton'];

	NavbarViewModel.prototype.dialogTexts = {};

	NavbarViewModel.prototype.isPhone = true;

	NavbarViewModel.prototype.reloadDialogTexts = function(){
		NavbarViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};
	
  return NavbarViewModel;

});
