// Filename: historyView.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'persistenceManager',
	'models/loginInformation',
	'models/connectionInformation'
], function($, Kendo, LanguageManager, PersistenceManager, LoginInformation, ConnectionInformation){

	var _viewModel = Kendo.observable({

    //
    // Properties
    //
    textArray: ['userLabel', 'passwordLabel', 'serverLabel', 'clientLabel', 'backButton', 'loginHeader','login'],
    dialogTexts: {},
    persistenceManager: new PersistenceManager(),
    loginInformation: new LoginInformation(),
    connectionInformation: new ConnectionInformation(),


    // 
    // Constructor
    //
    init: function(){

  		this.set('connectionInformation', new ConnectionInformation());
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
				model: 'login',
				mode: 'online'
			}

			var viewModel = this;
			this.persistenceManager.POSTRequest(request, viewModel.loginCompleted, viewModel.loginFailed);

		},


		//
		// Eventhandlers
		//
		loginCompleted: function(response){

			app.hideLoadingIndicator();

			if(response.HasLoggedIn === true){

				_viewModel.loginInformation.UserID = response.ID;
				_viewModel.loginInformation.Username = response.Username;
				_viewModel.loginInformation.Prename = response.Prename;
				_viewModel.loginInformation.Lastname = response.Lastname;
				_viewModel.loginInformation.Email = response.Email;
				_viewModel.loginInformation.HasLoggedIn = response.HasLoggedIn;
				_viewModel.loginInformation.save();

				//navigator.notification.alert('Login erfolgreich', this.notificationCallback, 'Erfolgreich', 'Ok');
				app.showNavigation();
				app.navigateToStart();

			}
			else{

				app.hideNavigation();
				//navigator.notification.alert('Login fehlgeschlagen', this.notificationCallback, 'Fehlgeschlagen', 'Ok');

			}

		},

		loginFailed: function(response){

			app.hideLoadingIndicator();

			app.hideNavigation();

			console.log(response);
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