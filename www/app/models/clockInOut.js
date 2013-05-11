// Filename: clockInOut.js

define([
  'jquery',
  'kendo',
  'helper'
], function($, Kendo, Helper){

  var ClockInOut = kendo.Class.extend({

    //
    // Properties
    //
    PersonId: 0,
    Time: null,
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
      entry.Time = Helper.dateToWcfFormat(kendo.toString(kendo.parseDate(this.Time)));
      entry.Date = Helper.dateToWcfFormat(kendo.toString(kendo.parseDate(this.Date)));
      entry.TimeTypeNo = this.TimeTypeNo;
      entry.Comment = this.Comment;

      var message = new Object();
      message.userid = 104;
      message.entry = entry;

      console.log(entry.Time);

      return message;
    },

  });

  return ClockInOut;

});
