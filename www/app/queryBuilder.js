// Filename: queryBuilder.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

	function QueryBuilder(){};

	// Clock In Out Queries
	QueryBuilder.prototype.clockInOut = {
		'insert': function(model){

			var query = {};
			query.sql = 'INSERT INTO tblClockInOut(Id, BookingDate, BookingTime, Absence, TimeType, Comment) Values(?,?,?,?,?,?)';
			query.data = [model.Id, model.BookingDate, model.BookingTime, model.Absence, model.TimeType, model.Comment];

			return query;
		},

		'update': 'UPDATE tblClockInOut',
		'select': function(){
			var query = {};
			query.sql = 'SELECT * FROM tblClockInOut';
			return query;
		},
		'delete': 'DELETE {} FROM tblClockInOut'
	};

  QueryBuilder.prototype.createQuery = function(type, dataType, model){

  	console.log(model);
  	var query = this[dataType][type](model);
  	return query;

  };

  return QueryBuilder;
  
});