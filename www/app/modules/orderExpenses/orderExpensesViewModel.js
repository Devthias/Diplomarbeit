define([
	'jquery',
	'kendo',
	'languageManager'
], function($, Kendo, languageManager){

	function OrderExpensesViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), OrderExpensesViewModel.prototype);
	};

	OrderExpensesViewModel.prototype = Kendo.observable({});

	OrderExpensesViewModel.prototype.textArray = ['orderExpenses', 'backButton'];

	OrderExpensesViewModel.prototype.dialogTexts = {};

	OrderExpensesViewModel.prototype.reloadDialogTexts = function(){
		OrderExpensesViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};

  return OrderExpensesViewModel;

});
