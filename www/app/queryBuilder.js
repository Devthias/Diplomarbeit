// Filename: queryBuilder.js

define([
  'jquery',
  'kendo'
], function($, Kendo){

	function QueryBuilder(){};

	// Clock In Out Queries
	QueryBuilder.prototype.clockInOut = {
		'POST': function(model){

			var data = model.entries[0];

			var query = {};
			query.sql = 'INSERT INTO tblClockInOut(Id, UserId, PersonId, Time, TimeTypeNo, Comment) Values(?,?,?,?,?,?)';
			query.data = [ data.Id, model.userid, data.PersonId, data.Time, data.TimeTypeNo, data.Comment];

			return query;
		},

		'PUT': 'UPDATE tblClockInOut',
		'GET': function(){
			var query = {};
			query.sql = 'SELECT * FROM tblClockInOut';
			return query;
		},
		'DELETE': 'DELETE {} FROM tblClockInOut'
	};

	// Abwesenheitszeit Queries
	QueryBuilder.prototype.absenceTime = {
		'POST': function(model){

			var data = model.entries[0];

			var query = {};
			query.sql = 'INSERT INTO tblAbsenceTime(Id, UserId, PersonId,  TimeAmount, Date, TimeTypeNo, Comment) Values(?,?,?,?,?,?)';
			query.data = [data.Id, model.userid, data.PersonId, data.TimeAmount, data.Date, data.TimeTypeNo, data.Comment];

			return query;
		},

		'GET': function(){
			var query = {};
			query.sql = 'SELECT * FROM tblAbsenceTime';
			return query;
		},
		'DELETE': 'DELETE * FROM tblAbsenceTime'
	};

	// Abwesenheitsbereich Queries
	QueryBuilder.prototype.absenceRange = {
		'POST': function(model){

			var data = model.entries[0];

			var query = {};
			query.sql = 'INSERT INTO tblAbsenceRange(Id, UserId, PersonId,  TimeFrom, TimeTo, Date, TimeTypeNo, Comment) Values(?,?,?,?,?,?,?)';
			query.data = [data.Id, model.userid, data.PersonId, data.TimeFrom, data.TimeTo, data.Date, data.TimeTypeNo, data.Comment];

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

			var data = model.entries[0];

			var query = {};
			query.sql = 'INSERT INTO tblHalfFullDayAbsence(Id, UserId, PersonId, DateFrom, DateTo, DateFromType, DateToType, TimeTypeNo, Comment) Values(?,?,?,?,?,?,?,?,?)';
			query.data = [data.Id, model.userid, data.PersonId, data.DateFrom, data.DateTo, data.DateFromType, data.DateToType, data.TimeTypeNo, data.Comment];

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