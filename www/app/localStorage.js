// Filename: queryBuilder.js

define([
  'jquery',
  'queryBuilder'
], function($, QueryBuilder){

    function LocalStorage(){};

    LocalStorage.prototype.db = null;

    LocalStorage.prototype.initialize = function(){
        var dbName = "bridge4erp";
        var version = "1.0";
        var displayName = "bridge4erp Database";
        var maxSize = 5*1024*1024;

        this.db = openDatabase(dbName, version, displayName, maxSize);
    };


    LocalStorage.prototype.checkIfCompatible = function(){
        if(!window.openDatabase)
            alert('SQLite is not supported');
        else
            alert('Supported');
    };

    LocalStorage.prototype.createTables = function(){
        console.log('create Tables');

        this.db.transaction(
            function(transaction){
                transaction.executeSql(
                    'CREATE TABLE IF NOT EXISTS tblClockInOut(Id, UserId, PersonId, Time, TimeTypeNo, Comment)');
            }
        );

        this.db.transaction(
            function(transaction){
                transaction.executeSql(
                    'CREATE TABLE IF NOT EXISTS tblAbsenceRange(Id, UserId, PersonId,  TimeFrom, TimeTo, Date, TimeTypeNo, Comment)');
            }
        );

        this.db.transaction(
            function(transaction){
                transaction.executeSql(
                    'CREATE TABLE IF NOT EXISTS tblAbsenceTime(Id, UserId, PersonId,  TimeAmount, Date, TimeTypeNo, Comment)');
            }
        );

        this.db.transaction(
            function(transaction){
                transaction.executeSql(
                    'CREATE TABLE IF NOT EXISTS tblHalfFullDayAbsence(Id, UserId, PersonId, DateFrom, DateTo, DateFromType, DateToType, TimeTypeNo, Comment)');
            }
        );
   
    };

    LocalStorage.prototype.POSTData = function(request, callback){
        this.initialize();
        this.createTables();

        var queryBuilder = new QueryBuilder();
        var query = queryBuilder.createQuery(request.type, request.model, request.data);

        this.db.transaction(
            function (transaction) {
            //Starter data when page is initialized
            
            transaction.executeSql(query.sql, query.data);
            }
        );

        callback();
    };

    LocalStorage.prototype.PUTData = function(request, callback){
        this.initialize();
        this.createTables();

        var queryBuilder = new QueryBuilder();
        var query = queryBuilder.createQuery(request.type, request.model, request.data);

        this.db.transaction(
            function (transaction) {
            
            transaction.executeSql(query);
            }
        );

        callback();
    };

    LocalStorage.prototype.DELETEData = function(request, callback){
        this.initialize();
        this.createTables();

        var queryBuilder = new QueryBuilder();
        var query = queryBuilder.createQuery(request.type, request.model, null);

        this.db.transaction(
            function (transaction) {
            
                transaction.executeSql(query.sql,[], function(tx, result){
                    console.log(result);
                });
            }
        );

        callback();
    };

    LocalStorage.prototype.GETData = function(request, callback){
        this.initialize();
        this.createTables();

        var queryBuilder = new QueryBuilder();
        var query = queryBuilder.createQuery(request.type, request.model, null);

        this.db.transaction(
            function (transaction) {
                transaction.executeSql(query.sql,[], function(tx, result){
                    var resultset = [];
                    for (var i = 0; i < result.rows.length; i++){
                        resultset[i] = result.rows.item(i);
                    }
                    console.log(callback);
                    callback(resultset);
                });
            }
        );
    };

    LocalStorage.prototype.dataHandler = function(){
        console.log("SQL Query Succeeded");
    };

    LocalStorage.prototype.errorHandler = function(transaction, error){
        if (error.code==1){
        } else {
            console.log('Oops.  Error was '+error.message+' (Code '+error.code+')');
        }
        return false;
    };

    return LocalStorage;
});