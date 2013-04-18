// Filename: persistenceManager.js

define([
  'jquery',
  'localStorage',
  'serverStorage'
], function($, localStorage, serverStorage){
  
	function PersistenceManager(){};

  // Calls the save method on the choosen store
	PersistenceManager.prototype.saveRequest = function(request, callback){
    console.log('persistenceStrategy save called:');
    var persistenceStrategy = this.getPersistanceStrategy();
    console.log(persistenceStrategy);
    persistenceStrategy.saveData(request, callback);
  };

  // Calls the update method on the choosen store
  PersistenceManager.prototype.updateRequest = function(request, callback){
    var persistenceStrategy = this.getPersistanceStrategy();
    persistenceStrategy.updateData(request, callback);
  };

  // Calls the delete method on the choosen store
  PersistenceManager.prototype.deleteRequest = function(request, callback){
    var persistenceStrategy = this.getPersistanceStrategy();
    persistenceStrategy.deleteData(request, callback);
  };

  // Calls the read method on the choosen store
  PersistenceManager.prototype.readRequest = function(request, callback){
    var persistenceStrategy = this.getPersistanceStrategy();
    persistenceStrategy.readData(request, callback);
  };

  // Creates a store object, depending on serverStatus of the app object
  PersistenceManager.prototype.getPersistanceStrategy = function(){

  	var status = app.serverStatus;

  	if(status === 'offline') return new localStorage();
  	if(status === 'online') return new serverStorage();

  };

  return PersistenceManager;

});
