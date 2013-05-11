// Filename: historyView.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'persistenceManager',
	'models/loginInformation',
], function($, Kendo, LanguageManager, PersistenceManager, LoginInformation){

	var _viewModel = Kendo.observable({

    //
    // Properties
    //
    textArray: ['userLabel', 'passwordLabel', 'serverLabel', 'clientLabel', 'backButton', 'loginHeader','login'],
    dialogTexts: {},
    persistenceManager: new PersistenceManager(),
    loginInformation: new LoginInformation(),


    // 
    // Constructor
    //
    init: function(){

			this.reloadDialogTexts();
			this.selectedLanguage = localStorage.getItem('currentLanguage');
			Kendo.bind($("#view"), this);

    },


    //
    // Methods
    //
    reloadDialogTexts: function(){

			this.set('dialogTexts', LanguageManager.getLanguageStrings(this.textArray));

		},
    login: function(e){

    	app.showLoadingIndicator();

			var request = {
				data: this.loginInformation.getMessageObject(),
				type: 'POST',
				model: 'login'
			}

			var viewModel = this;
			this.persistenceManager.POSTRequest(request, viewModel.loginCompleted, viewModel.loginFailed);

		},
    getMessageObject: function(){

      var message = new Object();
      message.User = this.User;
      message.Password = this.Password;

      return message;

    },


		//
		// Eventhandler
		//
		serverUrlChanged: function(e){
			this.loginInformation.save();
		},

		loginCompleted: function(response){

			app.hideLoadingIndicator();

			if(response === true){
				_viewModel.loginInformation.save();
				//navigator.notification.alert('Login erfolgreich', this.notificationCallback, 'Erfolgreich', 'Ok');
				app.navigate('app/modules/index/index.htm');
			}
			else{
				$('#appFooter').hide();
				navigator.notification.alert('Login fehlgeschlagen', this.notificationCallback, 'Fehlgeschlagen', 'Ok');
			}
			$('#appFooter').show();

		},
		loginFailed: function(response){

			$('#appFooter').hide();
			navigator.notification.alert('Login fehlgeschlagen', this.notificationCallback, 'Fehlgeschlagen', 'Ok');
			
		},

	});

	return {
		
		initialize: function(initEvt){
			_viewModel.init();
		},

		beforeShow: function(beforeShowEvt){

			if(_viewModel !== undefined)
				_viewModel.reloadDialogTexts();

		},

		show: function(showEvt){
		},

		viewModel: _viewModel,

	}

});