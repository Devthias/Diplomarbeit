define([
	'js/languageManager'
	],
	function(LanguageManager){

		describe('The languageManager loads a LanguageText from localStorage', function(){

			var manager = new LanguageManager();

			it('it should load the correct text',
				function(){
					var languageStrings = ['clockInOut'];

					expect(manager.getLanguageString(languageStrings)).toBe('Kommen / Gehen');

				});
		});
 
		describe('The languageManager loads a LanguageText from localStorage', function(){

			var manager = new LanguageManager();

			it('it should return the default text [not_translated] if the languageText does not exist',
				function(){
					var languageStrings = ['NotExistingTest'];

					expect(manager.getLanguageString(languageStrings)).toBe('[not_translated]');

				});
		})
});