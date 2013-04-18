// Filename: languageManager.js

define([
	'jquery'
], function($){

	function LanguageManager(){};

	LanguageManager.prototype.getLanguageString = function(stringName){
		var languageString;
		var languageObject;

		languageString = localStorage.getItem(stringName);

		if(languageString === null) return '[not_translated]';

		languageObject = $.parseJSON(languageString);

		languageString = languageObject[localStorage.getItem('currentLanguage')];

		return languageString;
	};

	LanguageManager.getLanguageStrings = function(stringNames){
		var result = {};
		var languageString;
		var languageObject;
		var currentLanguage = localStorage.getItem('currentLanguage');

		if(currentLanguage === null){
			currentLanguage = "de";
		}

		for(var i = 0; i < stringNames.length; i++){
			
			var textName = stringNames[i];
			
			languageString = localStorage.getItem(textName);
			languageObject = $.parseJSON(languageString);

			if(languageObject !== undefined && languageObject !== null){
				languageString = languageObject[currentLanguage];	
				result[textName] = languageString;
			}
		}

		return result;

	};

	return LanguageManager;

});