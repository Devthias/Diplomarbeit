// Filename: queryBuilder.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

	function QueryBuilder(){};

	// Kommen / Gehen Queries
	QueryBuilder.prototype.clockInOut = {
		'POST': function(model){

			var query = {};
			query.sql = 'INSERT INTO tblClockInOut(Id, BookingDate, BookingTime, Absence, TimeType, Comment) Values(?,?,?,?,?,?)';
			query.data = [model.Id, model.BookingDate, model.BookingTime, model.Absence, model.TimeType, model.Comment];

			return query;
		},

		'GET': function(){
			var query = {};
			query.sql = 'SELECT * FROM tblClockInOut';
			return query;
		},
		'DELETE': 'DELETE * FROM tblClockInOut'
	};

	// Abwesenheitszeit Queries
	QueryBuilder.prototype.absenceTime = {
		'POST': function(model){

			var query = {};
			query.sql = 'INSERT INTO tblAbsenceTime(Id, PersonId, TimeAmount, Date, TimeTypeNo, Comment) Values(?,?,?,?,?,?)';
			query.data = [model.Id, model.PersonId, model.TimeAmount, model.Date, model.TimeTypeNo, model.Comment];

			return query;
		},

		'GET': function(){
			var query = {};
			query.sql = 'SELECT * FROM tblAbsenceTime';
			return query;
		},
		'DELETE': 'DELETE * FROM tblAbsenceTime'
	};

	// Abwesenheitszeit Queries
	QueryBuilder.prototype.absenceRange = {
		'POST': function(model){

			var query = {};
			query.sql = 'INSERT INTO tblAbsenceRange(Id, PersonId, TimeFrom, TimeTo, Date, TimeTypeNo, Comment) Values(?,?,?,?,?,?,?)';
			query.data = [model.Id, model.PersonId, model.TimeAmount, model.Date, model.TimeTypeNo, model.Comment];

			return query;
		},

		'GET': function(){
			var query = {};
			query.sql = 'SELECT * FROM tblAbsenceRange';
			return query;
		},
		'DELETE': 'DELETE * FROM tblAbsenceRange'
	};

	// Abwesenheitszeit Queries
	QueryBuilder.prototype.halfFullDayAbsence = {
		'POST': function(model){

			var query = {};
			query.sql = 'INSERT INTO tblHalfFullDayAbsence(Id, PersonId, DateFrom, DateTo, DateFromType, DateToType, DateToType, TimeTypeNo, Comment) Values(?,?,?,?,?,?,?,?,?)';
			query.data = [model.Id, model.PersonId, model.TimeAmount, model.Date, model.TimeTypeNo, model.Comment];

			return query;
		},

		'GET': function(){
			var query = {};
			query.sql = 'SELECT * FROM tblHalfFullDayAbsence';
			return query;
		},
		'DELETE': 'DELETE * FROM tblHalfFullDayAbsence'
	};

  QueryBuilder.prototype.createQuery = function(type, dataType, model){

  	console.log(model);
  	var query = this[dataType][type](model);
  	return query;

  };

  return QueryBuilder;
  
});