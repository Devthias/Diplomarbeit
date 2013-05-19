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
    Username: "",
    Password: "",
    UserID: 0,
    Prename: "",
    Lastname: "",
    Email: "",
    HasLoggedIn: false,

    // 
    // Constructor
    //
    init: function(){
      var loginInformation = JSON.parse(localStorage.getItem('LoginInformation'));

      if(loginInformation === null) return;
      this.ServerUrl = loginInformation.ServerUrl;
      this.Username = loginInformation.Username;
      this.Password = loginInformation.Password;
      this.UserID =  loginInformation.UserID;
      this.Prename = loginInformation.Prename;
      this.Lastname = loginInformation.Lastname;
      this.Email = loginInformation.Email;
      this.HasLoggedIn = loginInformation.HasLoggedIn;

    },

    //
    // Methods
    //
    save: function(){
      var loginInformation = new Object();

      console.log(this.Prename);
      console.log(this.Lastname);

      loginInformation.ServerUrl = this.ServerUrl;
      loginInformation.Username = this.Username;
      loginInformation.Password = this.Password;
      loginInformation.UserID = this.UserID;
      loginInformation.Prename = this.Prename;
      loginInformation.Lastname = this.Lastname;
      loginInformation.Email = this.Email;
      loginInformation.HasLoggedIn = this.HasLoggedIn;

      localStorage.setItem('LoginInformation', JSON.stringify(loginInformation));
    },

    getMessageObject: function(){

      var userEntry = new Object();
      userEntry.username = this.Username;
      userEntry.password = this.Password;

      console.log(userEntry);

      return userEntry;
    },

  });

  return LoginInformation;

});