// Filename: clockInOut.js

define([
  'jquery',
  'kendo',
  'models/booking',
  'helper'
], function($, Kendo, Booking, Helper){

  var ClockInOut = kendo.Class.extend({

    //
    // Properties
    //
    PersonId: 104,
    Time: null,
    Date: null,
    TimeTypeNo: 0,
    Comment: "",

    // 
    // Constructor
    //
    init: function(){},

    getMessageObject: function(){
      var entry = new Object();

      entry.PersonId = this.PersonId;
      entry.Time = Helper.dateToWcfFormat(kendo.toString(kendo.parseDate(this.Date + this.Time)));
      entry.TimeTypeNo = this.TimeTypeNo;
      entry.Comment = this.Comment;

      var message = new Object();
      message.userid = 104;
      message.entry = entry;

      return message;
    },

  });

  return ClockInOut;

});
