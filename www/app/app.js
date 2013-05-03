// Filename: app.js

define([
  'jquery',
  'kendo',
  'helper',
  'languageManager',
  'modules/absenceRegion/absenceRegionView',
  'modules/absenceTime/absenceTimeView',
  'modules/clockInOut/clockInOutView',
  'modules/halfFullDayAbsence/halfFullDayAbsenceView',
  'modules/history/historyView',
  'modules/index/indexView',
  'modules/interruptMessagePiece/interruptMessagePieceView',
  'modules/interruptMessage/interruptMessageView',
  'modules/navbar/navbarView',
  'modules/orderExpenses/orderExpensesView',
  'modules/orderPiece/orderPieceView',
  'modules/orderTime/orderTimeView',
  'modules/settings/settingsView',
  'modules/settings/loginView',
  'modules/absenceRegion/absenceRegionViewModel',
  'modules/absenceTime/absenceTimeViewModel',
  'modules/clockInOut/clockInOutViewModel',
  'modules/halfFullDayAbsence/halfFullDayAbsenceViewModel',
  'modules/history/historyViewModel',
  'modules/index/indexViewModel',
  'modules/interruptMessagePiece/interruptMessagePieceViewModel',
  'modules/interruptMessage/interruptMessageViewModel',
  'modules/navbar/navbarViewModel',
  'modules/orderExpenses/orderExpensesViewModel',
  'modules/orderPiece/orderPieceViewModel',
  'modules/orderTime/orderTimeViewModel',
  'modules/settings/settingsViewModel',
  'modules/settings/loginViewModel',
], function($, Kendo, helper, languageManager, absenceRegionView, absenceTimeView, clockInOutView, halfFullDayAbsenceView, historyView, indexView, interruptMessagePieceView, interruptMessageView, navbarView, orderExpensesView, orderPieceView, orderTimeView, settingsView, loginView, absenceRegionViewModel, absenceTimeViewModel, clockInOutViewModel, halfFullDayAbsenceViewModel, historyViewModel, indexViewModel, interruptMessagePieceViewModel, interruptMessageViewModel, navbarViewModel, orderExpensesViewModel, orderPieceViewModel, orderTimeViewModel, settingsViewModel, loginViewModel){

    var _app;

    return{
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

          $.get('defaults/languageTexts.json', this.updateLanguageTexts);
        }

        appElement.show();

        if(this.isTablet) this.initializeTablet();
        else this.initializePhone();

      },

      updateLanguageTexts: function(data){
        var languageTexts = $.parseJSON(data);

        if(languageTexts === null) return;

        $.each(languageTexts.texts, function(i, item){
          var object = JSON.stringify(item);
          localStorage.setItem(i, object);
        });

      },

      // Creates the Kendo app object
      initializeApp: function(params){
        _app = new Kendo.mobile.Application(appElement, params);
      },

      // Initializes the view for phones
      initializePhone: function(){
        this.initializeApp({
            loading: "Please wait...",
            layout: appLayout,
            transition: 'slide',
            initial: 'app/modules/index/index.htm'
        });
      },

      // Initializes the view for tablets
      initializeTablet: function(){
        this.initializeApp({
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

      isTablet: false,

      serverStatus: 'online',

      views: {
        navbar: navbarView,
        absenceRegion: absenceRegionView,
        absenceTime: absenceTimeView,
        clockInOut: clockInOutView,
        halfFullDayAbsence: halfFullDayAbsenceView,
        history: historyView,
        index: indexView,
        interruptMessagePiece: interruptMessagePieceView,
        interruptMessage: interruptMessageView,
        orderExpenses: orderExpensesView,
        orderPiece: orderPieceView,
        orderTime: orderTimeView,
        settings: settingsView,
        login: loginView,
      },

      viewModels: {},
    }
});