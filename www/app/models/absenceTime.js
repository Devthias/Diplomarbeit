// Filename: clockInOut.js

define([
  'jquery',
  'kendo'
], function($, Kendo){


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
      message.entry = entry;

      console.log(entry.Time);

      return message;
    },

    dateToWcfFormat: function(dateString) {
      var date = new Date(dateString);
      var parsedDate = '\/Date(' + date.getTime() + '-0000)\/';
      return parsedDate;
    },

  });

  return AbsenceTime;

});