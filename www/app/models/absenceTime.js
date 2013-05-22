// Filename: clockInOut.js

define([
  'jquery',
  'kendo',
  'helper'
], function($, Kendo,  Helper){


  var AbsenceTime = kendo.Class.extend({

    //
    // Properties
    //
    PersonId: 0,
    TimeAmount: 0,
    Date: null,
    TimeTypeNo: 0,
    Comment: "",

    // 
    // Constructor
    //
    init: function(){},

    // Erstellt das Message Objekt, welches dem Service übergeben wird
    getMessageObject: function(){

      var entry = new Object();
      entry.PersonId = this.PersonId;
      
      entry.Date = Helper.dateToWcfFormat(kendo.toString(kendo.parseDate(this.Date)));
      entry.TimeTypeNo = this.TimeTypeNo;
      entry.Comment = this.Comment;
      entry.TimeAmount = this.TimeAmount;
      var message = new Object();
      message.userid = 104;
      message.entries = [entry];

      console.log(entry.Time);

      return message;
    },

  });

  return AbsenceTime;

});