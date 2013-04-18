// Filename: clockInOut.js

define([
  'jquery',
  'kendo',
  'models/booking'
], function($, Kendo, Booking){

  var ClockInOut = kendo.data.Model.define({
    id: 'Id',
    fields: {
      Id: {
        nullable: true
      },
      BookingDate: {
        type: 'string'
      },
      BookingTime: {
        type: 'string'
      },
      Absence: {
        type: 'int'
      },
      TimeType: {
        type: 'int'
      },
      Comment: {
        type: 'string'
      }
    }
  });

  return ClockInOut;

});