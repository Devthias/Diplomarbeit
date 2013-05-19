// Filename: connectionView.js

define([
	'jquery',
	'kendo',
	'languageManager',
	'persistenceManager',
	'models/loginInformation',
	'models/connectionInformation',
], function($, Kendo, LanguageManager, PersistenceManager, LoginInformation, ConnectionInformation){

	var _viewModel = Kendo.observable({

    //
    // Properties
    //
    textArray: ['serverLabel', 'clientLabel', 'backButton','connect', 'connectionHeader', 'portLabel','workOfflineLabel', 'offlineModeText'],
    dialogTexts: {},
    persistenceManager: new PersistenceManager(),
		connectionInformation: new ConnectionInformation(),
    loginInformation: new LoginInformation(),


    // 
    // Constructor
    //
    init: function(){
			var viewModel = this;
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

    connect: function(e){

    	app.showLoadingIndicator();
    	app.hideNavigation();
    	
    	var request = {
				type: 'select',
				model: 'connect',
				mode: 'online',
			}

			_viewModel = this;

			this.persistenceManager.GETRequest(request, _viewModel.connectCompleted, _viewModel.connectionFailed);
		},

		workOffline: function(){

			$("#offline-login").kendoMobileModalView("close");

			console.log(this.loginInformation);

			if(this.loginInformation.Username !== "" && this.loginInformation.Password !== "" && this.loginInformation.UserID !== 0){

				app.serverStatus = 'offline';
				app.showNavigation();
				app.navigateToStart();

			}
			else{
				//navigator.notification.alert('Sie müssen sich ein erstes Mal anmelden.', this.notificationCallback, 'Fehlgeschlagen', 'Ok');
			}

		},


		//
		// Eventhandler
		//
		connectCompleted: function(result){

			console.log('connectCompleted');

			app.hideLoadingIndicator();

			_viewModel.connectionInformation.Clients = result.GetClientsResult;
			_viewModel.connectionInformation.save();

			if(result){
				app.navigate('app/modules/settings/login.htm');
			}

		},
		connectionFailed: function(response){

			app.hideLoadingIndicator();

			console.log(_viewModel.loginInformation);
			if(_viewModel.loginInformation.Username !== "" && _viewModel.loginInformation.Password !== "" && _viewModel.loginInformation.UserID !== 0){

				$('#offline-login').data('kendoMobileModalView').open();

			}
			else{

				navigator.notification.alert('Verbindung fehlgeschlagen', _viewModel.notificationCallback, 'Fehlgeschlagen', 'Ok');

			}
		},
		serverUrlChanged:  function(e){

			console.log('url changed');
			this.connectionInformation.save();

		},

  });

	return {
		
		initialize: function(initEvt){

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