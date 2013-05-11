// Filename: persistenceManager.js

define([
  'jquery',
  'localStorage',
  'serverStorage'
], function($, localStorage, serverStorage){
  
  function PersistenceManager(){};

  // Calls the save method on the choosen store
  PersistenceManager.prototype.POSTRequest = function(request, callback, failedCallback){
    console.log('persistenceStrategy save called:');
    var persistenceStrategy = this.getPersistanceStrategy();
    persistenceStrategy.POSTData(request, callback, failedCallback);
  };

  // Calls the update method on the choosen store
  PersistenceManager.prototype.PUTRequest = function(request, callback, failedCallback){
    var persistenceStrategy = this.getPersistanceStrategy();
    persistenceStrategy.PUTData(request, callback, failedCallback);
  };

  // Calls the delete method on the choosen store
  PersistenceManager.prototype.DELETERequest = function(request, callback, failedCallback){
    var persistenceStrategy = this.getPersistanceStrategy();
    persistenceStrategy.DELETEData(request, callback, failedCallback);
  };

  // Calls the read method on the choosen store
  PersistenceManager.prototype.GETRequest = function(request, callback, failedCallback){
    var persistenceStrategy = this.getPersistanceStrategy();
    persistenceStrategy.GETData(request, callback, failedCallback);
  };

  // Creates a store object, depending on serverStatus of the app object
  PersistenceManager.prototype.getPersistanceStrategy = function(){

    var status = app.serverStatus;

    if(status === 'offline') return new localStorage();
    if(status === 'online') return new serverStorage();

  };

  return PersistenceManager;

});
