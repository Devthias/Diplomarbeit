// Filename: loginInformation.js

define([
  'jquery',
  'kendo',
  'helper'
], function($, Kendo, Helper){

  var LoginInformation = Kendo.Class.extend({

    //
    // Properties
    //
    ServerUrl: "",
    User: "",
    Password: "",

    // 
    // Constructor
    //
    init: function(){
      var loginInformation = JSON.parse(localStorage.getItem('LoginInformation'));

      if(loginInformation === null) return;
      this.ServerUrl = loginInformation.ServerUrl;
      this.User = loginInformation.User;
      this.Password = loginInformation.Password;

      console.log(this);
    },

    //
    // Methods
    //
    save: function(){
      var loginInformation = new Object();

      loginInformation.ServerUrl = this.ServerUrl;
      loginInformation.User = this.User;
      loginInformation.Password = this.Password;

      localStorage.setItem('LoginInformation', JSON.stringify(loginInformation));
    },

    getMessageObject: function(){

      var message = new Object();
      message.username = this.User;
      message.password = this.Password;

      return message;
    },

  });

  return LoginInformation;

});