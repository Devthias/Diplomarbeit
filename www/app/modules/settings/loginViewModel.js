define([
	'jquery',
	'kendo',
	'languageManager',
	'persistenceManager',
	'models/loginInformation'
], function($, Kendo, languageManager, PersistenceManager, LoginInformation){

	function LoginViewModel(){
		this.reloadDialogTexts();
		this.selectedLanguage = localStorage.getItem('currentLanguage');
		Kendo.bind($("#view"), LoginViewModel.prototype);
	};

	LoginViewModel.prototype = Kendo.observable({});

	//
	// Properties
	//
	LoginViewModel.prototype.textArray = ['userLabel', 'passwordLabel', 'serverLabel', 'clientLabel', 'backButton', 'loginHeader','login'];
	LoginViewModel.prototype.dialogTexts = {};
	LoginViewModel.prototype.reloadDialogTexts = function(){
		LoginViewModel.prototype.set('dialogTexts', languageManager.getLanguageStrings(this.textArray));
	};
	LoginViewModel.prototype.persistenceManager = new PersistenceManager();
	LoginViewModel.prototype.loginInformation = new LoginInformation();

	//
	// Methods
	//
	LoginViewModel.prototype.login = function(e){

		var request = {
			data: this.loginInformation.getMessageObject(),
			type: 'select',
			model: 'loginInformation'
		}

		this.persistenceManager.saveRequest(request, this.loginCompleted);

	};
	LoginViewModel.prototype.LoginInformationChanged = function(e){
		this.loginInformation.save();
		this.reloadDialogTexts();
	};
	//
	// Eventhandlers
	//
	LoginViewModel.prototype.loginCompleted = function(response){
		console.log(response);
		navigator.notification.alert('Login erfolgreich', this.notificationCallback, 'Erfolgreich', 'Ok');
	};

  return LoginViewModel;

});
