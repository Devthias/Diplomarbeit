// Filename: clockInOut.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

  //
  // Properties
  //
  var Settings = kendo.Class.extend({

    ServerUrl: "",
    User: "",
    Password: "",
    Language: "",
    IsTerminal: false,

    // 
    // Constructor
    //
    init: function(){
      this.ServerUrl = localStorage.getItem('ServerUrl');
      this.Client = localStorage.getItem('Client');
      this.User = localStorage.getItem('User');
      this.Password = localStorage.getItem('Password');
      this.Language = localStorage.getItem('Language');
    },

    //
    // Methods
    //
    save: function(){
      localStorage.setItem('ServerUrl', this.ServerUrl);
      localStorage.setItem('Client', this.Client);
      localStorage.setItem('User', this.User);
      localStorage.setItem('Password', this.Password);
      localStorage.setItem('Language', this.Language);
    }
  });

  return Settings;

});