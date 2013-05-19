// Filename: app.js

define([
  'jquery',
  'kendo',
  'helper',
  'languageManager',
  'persistenceManager',
  'modules/absenceRange/absenceRangeView',
  'modules/absenceTime/absenceTimeView',
  'modules/clockInOut/clockInOutView',
  'modules/halfFullDayAbsence/halfFullDayAbsenceView',
  'modules/history/historyView',
  'modules/index/indexView',
  'modules/navbar/navbarView',
  'modules/settings/settingsView',
  'modules/worktime/worktimeView',
  'modules/absences/absencesView',
  'modules/settings/loginView',
  'modules/settings/connectionView',
  'modules/synchronization/synchronizationView',
  'models/loginInformation',
  'models/connectionInformation',
], function($, Kendo, helper, languageManager, PersistenceManager, absenceRangeView, absenceTimeView, clockInOutView, halfFullDayAbsenceView, historyView, indexView, navbarView, settingsView, worktimeView, absencesView, loginView, connectionView, synchronizationView, LoginInformation, ConnectionInformation){

    var _app;

    return{

      loginInformation: new LoginInformation(),
      connectionInformation: new ConnectionInformation(),

      initialize: function(){

        this.checkDeviceType();

        appElement = (this.isTablet === true) ? $("#tabletApp") : $("#phoneApp");
        appLayout = (this.isTablet === true) ? "null" : "phoneDefault";

        var firstRun = localStorage.getItem('FirstRun');
        var currentLanguage = localStorage.getItem('currentLanguage');
        if(currentLanguage === null){
          localStorage.setItem('currentLanguage', "de");
        }

        $.get('defaults/languageTexts.json', this.updateLanguageTexts);

        // Create default data and local storage
        if(firstRun === null && firstRun != false){
          //load default texts
          localStorage.setItem('FirstRun', false);
          localStorage.setItem('LoginInformation', null);
          localStorage.setItem('ConnectionInformation', null);

        }

        this.initializeApp();

      },

      updateLanguageTexts: function(data){

        var languageTexts = $.parseJSON(data);

        if(languageTexts === null) return;

        $.each(languageTexts.texts, function(i, item){
          var object = JSON.stringify(item);
          localStorage.setItem(i, object);
        });

      },

      initializeApp: function(deviceType){

        if(this.isTablet === true) this.initializeTablet();
        else this.initializePhone();
        appElement.show();
        
        var connectionInformation = JSON.parse(localStorage.getItem('ConnectionInformation'));
        var loginInformation = JSON.parse(localStorage.getItem('LoginInformation'));

        this.login();
        
      },

      // Creates the Kendo app object
      instantiateKendoApp: function(params){

        _app = new Kendo.mobile.Application(appElement, params);

      },

      // Initializes the view for phones
      initializePhone: function(){

        this.instantiateKendoApp({
            loading: "Please wait...",
            layout: appLayout,
            transition: 'slide',
            initial: 'app/modules/index/index.htm'
        });

      },

      // Initializes the view for tablets
      initializeTablet: function(){

        this.instantiateKendoApp({
          loading: "Please wait...",
          layout: appLayout,
          transition: 'slide'
        });

        var pane = $('#main-pane').data('kendoMobilePane');
        var left_pane = $('#left').data('kendoMobilePane');
        pane.navigate('app/modules/clockInOut/clockInOut.htm');
        left_pane.navigate('app/modules/index/index.htm');

      },

      initializeLocalDb: function(){

        localSQLStorage.initialize();
        localSQLStorage.createTables();

      },

      checkDeviceType: function(){

        if(Kendo.support.mobileOS && Kendo.support.mobileOS.tablet){
          this.isTablet = true;
        }
        else
        {
          this.isTablet = false;
        }

      },

      navigate: function(url){

        if(this.isTablet === true){
          this.navigateTablet(url);
        }
        else{
          this.navigatePhone(url);
        }

      },

      navigatePhone: function(url){

        console.log('navigatePhone called');

        _app.navigate(url);

      },

      navigateTablet: function(url){

        console.log('navigateTablet called');

        var pane = $('#main-pane').data('kendoMobilePane');
        var left_pane = $('#left').data('kendoMobilePane');
        pane.navigate(url);
        left_pane.navigate('app/modules/index/index.htm');

      },

      navigateToStart: function(){

        if(this.isTablet === true){
          this.navigateTablet('app/modules/clockInOut/clockInOut.htm');
        }
        else{
          this.navigatePhone('app/modules/index/index.htm');
        }
      },

      login: function(e){

        this.showLoadingIndicator();

        var request = {
          data: this.loginInformation.getMessageObject(),
          type: 'POST',
          model: 'login',
          mode: 'online'
        }

        _viewModel = this;

        this.persistenceManager.POSTRequest(request, this.loginCompleted, this.loginFailed);
      },

      loginCompleted: function(response){

        console.log(response);

        if(response.HasLoggedIn === true){

          app.showNavigation();

          console.log('start app');

          _viewModel.loginInformation.UserID = response.ID;
          _viewModel.loginInformation.Username = response.Username;
          _viewModel.loginInformation.Prename = response.Prename;
          _viewModel.loginInformation.Lastname = response.Lastname;
          _viewModel.loginInformation.Email = response.Email;
          _viewModel.loginInformation.HasLoggedIn = response.HasLoggedIn;
          _viewModel.loginInformation.save();

          //navigator.notification.alert('Login erfolgreich', this.notificationCallback, 'Erfolgreich', 'Ok');
          app.navigateToStart();

        }
        else{
          app.hideNavigation();
          app.navigate('app/modules/settings/connection.htm');
        }

        _viewModel.loginInformation.save();

      },

      loginFailed: function(response){

        console.log(response);

        //navigator.notification.alert('Login fehlgeschlagen', this.notificationCallback, 'Fehler', 'Ok');
        app.hideNavigation();
        app.navigate('app/modules/settings/connection.htm');

      },

      synchronize: function(){

        console.log('start synchronize');

      },

      showLoadingIndicator: function(){

        console.log('showLoading called');
        _app.showLoading();

      },

      hideLoadingIndicator: function(){

        console.log('hideLoading called');
        _app.hideLoading();

      },

      showNavigation: function(){

        if(this.isTablet === true){
          $("#left").show();
        }

      },

      hideNavigation: function(){
        console.log('hideNavigation called');
        if(this.isTablet === true){
          console.log('hide sidebar');
          $("#left").hide();
        }

      },

      isTablet: false,

      serverStatus: 'online',

      isLogedIn: false,


      persistenceManager: new PersistenceManager(),

      views: {
        navbar: navbarView,
        absenceRange: absenceRangeView,
        absenceTime: absenceTimeView,
        clockInOut: clockInOutView,
        halfFullDayAbsence: halfFullDayAbsenceView,
        history: historyView,
        index: indexView,
        worktime: worktimeView,
        absences: absencesView,
        settings: settingsView,
        connection: connectionView,
        login: loginView,
        synchronization: synchronizationView
      },

      viewModels: {},
    }
});