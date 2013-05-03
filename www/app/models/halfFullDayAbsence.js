// Filename: clockInOut.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

  var HalfFullDayAbsence = kendo.Class.extend({

    //
    // Properties
    //
    PersonId: 0,
    DateFrom: null,
    DateTo: null,
    DateFromType: 0,
    DateToType: 0,
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
      entry.DateFrom = Helper.dateToWcfFormat(kendo.toString(kendo.parseDate(this.DateFrom)));
      entry.DateTo = Helper.dateToWcfFormat(kendo.toString(kendo.parseDate(this.DateTo)));
      entry.DateFromType = this.DateFromType;
      entry.DateToType = this.DateToType;
      entry.TimeTypeNo = this.TimeTypeNo;
      entry.Comment = this.Comment;
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

  return HalfFullDayAbsence;

});