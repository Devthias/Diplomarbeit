// Filename: clockInOut.js

define([
  'jquery',
  'kendo',
  'helper'
], function($, Kendo, Helper){

  var AbsenceRange = kendo.Class.extend({

    //
    // Properties
    //
    PersonId: 0,
    TimeFrom: null,
    TimeTo: null,
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
      entry.TimeFrom = Helper.dateToWcfFormat(kendo.toString(kendo.parseDate(this.TimeFrom)));
      entry.TimeTo = Helper.dateToWcfFormat(kendo.toString(kendo.parseDate(this.TimeTo)));
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

  return AbsenceRange;

});