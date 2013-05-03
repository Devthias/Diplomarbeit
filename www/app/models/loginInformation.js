// Filename: loginInformation.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

  //
  // Properties
  //
  var LoginInformation = kendo.Class.extend({

    ServerUrl: "",
    User: "",
    Password: "",

    // 
    // Constructor
    //
    init: function(){
      this.ServerUrl = localStorage.getItem('ServerUrl');
      this.User = localStorage.getItem('User');
      this.Password = localStorage.getItem('Password');
    },

    //
    // Methods
    //
    save: function(){
      console.log('save called:');
      localStorage.setItem('ServerUrl', this.ServerUrl);
      localStorage.setItem('User', this.User);
      localStorage.setItem('Password', this.Password);
    },

    getMessageObject: function(){
      var message = new Object();
      message.ServerUrl = this.ServerUrl;
      message.User = this.User;
      message.Password = this.Password;

      return message;
    },
  });

  return LoginInformation;

});