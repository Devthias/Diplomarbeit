// Filename: booking.js

define([
	'jquery',
	'kendo'
], function($, Kendo){

	var Booking = kendo.Class.extend({
    BookingId: 0,
    BookingPerson: 0,
    Comment: ''
  });

	return Booking;

});