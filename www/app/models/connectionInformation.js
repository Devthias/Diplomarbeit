// Filename: loginInformation.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

  var ConnectionInformation = Kendo.Class.extend({

    //
    // Properties
    //
    ServerUrl: "",
    Clients: [],


    // 
    // Constructor
    //
    init: function(){
      this.reloadData();
    },


    //
    // Methods
    //
    save: function(){
      console.log('save called');
      var connectionInformation = new Object();

      connectionInformation.ServerUrl = this.ServerUrl;
      connectionInformation.Clients = this.Clients;

      localStorage.setItem('ConnectionInformation', JSON.stringify(connectionInformation));

    },
    reloadData: function(){
      var connectionInformation = JSON.parse(localStorage.getItem('ConnectionInformation'));

      if(connectionInformation === null)return;
      this.ServerUrl = connectionInformation.ServerUrl;
      this.Clients = connectionInformation.Clients;
    },
    getMessageObject: function(){
      var message = new Object();
      message.ServerUrl = this.ServerUrl;
      message.Clients = this.Clients;

      return message;
    },
    
  });

  return ConnectionInformation;

});