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
  'modules/settings/loginView',
  'models/loginInformation',
], function($, Kendo, helper, languageManager, PersistenceManager, absenceRangeView, absenceTimeView, clockInOutView, halfFullDayAbsenceView, historyView, indexView, navbarView, settingsView, loginView, LoginInformation){

    var _app;

    return{

      //
      // Properties
      //
      loginInformation: new LoginInformation(),

      isTablet: false,

      serverStatus: 'online',

      isLogedIn: false,



      //
      // Constructor
      //
      initialize: function(){

        this.checkDeviceType();

        appElement = (this.isTablet) ? $("#tabletApp") : $("#phoneApp");
        appLayout = (this.isTablet) ? "null" : "phoneDefault";

        var firstRun = localStorage.getItem('FirstRun');
        var currentLanguage = localStorage.getItem('currentLanguage');
        if(currentLanguage === null){
          localStorage.setItem('currentLanguage', "de");
        }

        // Create default data and local storage
        if(firstRun === null && firstRun != false){
          //load default texts
          localStorage.setItem('FirstRun', false);
          localStorage.setItem('LoginInformation', null);

          $.get('defaults/languageTexts.json', this.updateLanguageTexts);
        }

        this.initializeApp();

      },



      //
      // Methods
      //
      updateLanguageTexts: function(data){
        var languageTexts = $.parseJSON(data);

        if(languageTexts === null) return;

        $.each(languageTexts.texts, function(i, item){
          var object = JSON.stringify(item);
          localStorage.setItem(i, object);
        });

      },

      initializeApp: function(){
        if(this.isTablet) this.initializeTablet();
        else this.initializePhone();
        appElement.show();
        
        var loginInformation = JSON.parse(localStorage.getItem('LoginInformation'));
        console.log(loginInformation);
        if(loginInformation === null || loginInformation.ServerUrl === null){
          console.log('naviagte to login');
          app.navigate('app/modules/settings/login.htm');
        }
        else{
          this.login();
        }
        
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
        this.isTablet = Kendo.support.mobileOS && Kendo.support.mobileOS.tablet,
          appElement = null,
          appLayout = null;
      },

      navigate: function(url){
        _app.navigate(url);
      },

      login: function(e){
        var request = {
          data: this.loginInformation.getMessageObject(),
          type: 'select',
          model: 'login'
        }
        this.persistenceManager.POSTRequest(request, this.loginCompleted, this.loginFailed);
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

      //
      // Eventhandler
      //
      loginCompleted: function(response){

        if(response === true){
          console.log('login erfolgreich');
          $('#appFooter').show();
          navigator.notification.alert('Login erfolgreich', this.notificationCallback, 'Erfolgreich', 'Ok');
          app.navigate('app/modules/index/index.htm');
        }
        else{
          $('#appFooter').hide();
          app.navigate('app/modules/settings/login.htm');
        }

      },

      loginFailed: function(response){
        $('#appFooter').hide();
        app.navigate('app/modules/settings/login.htm');
      },




      persistenceManager: new PersistenceManager(),

      views: {
        navbar: navbarView,
        absenceRange: absenceRangeView,
        absenceTime: absenceTimeView,
        clockInOut: clockInOutView,
        halfFullDayAbsence: halfFullDayAbsenceView,
        history: historyView,
        index: indexView,
        settings: settingsView,
        login: loginView
      },

      viewModels: {},
    }
});