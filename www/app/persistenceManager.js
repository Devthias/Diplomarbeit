// Filename: persistenceManager.js

define([
  'jquery',
  'localStorage',
  'serverStorage'
], function($, localStorage, serverStorage){
  
  function PersistenceManager(){};

  // Calls the save method on the choosen store
  PersistenceManager.prototype.POSTRequest = function(request, callback, failedCallback){
    var persistenceStrategy = this.getPersistanceStrategy(request.mode);
    persistenceStrategy.POSTData(request, callback, failedCallback);
  };

  // Calls the update method on the choosen store
  PersistenceManager.prototype.PUTRequest = function(request, callback, failedCallback){
    var persistenceStrategy = this.getPersistanceStrategy(request.mode);
    persistenceStrategy.PUTData(request, callback, failedCallback);
  };

  // Calls the delete method on the choosen store
  PersistenceManager.prototype.DELETERequest = function(request, callback, failedCallback){
    var persistenceStrategy = this.getPersistanceStrategy(request.mode);
    persistenceStrategy.DeleteData(request, callback, failedCallback);
  };

  // Calls the read method on the choosen store
  PersistenceManager.prototype.GETRequest = function(request, callback, failedCallback){
    var persistenceStrategy = this.getPersistanceStrategy(request.mode);
    persistenceStrategy.GETData(request, callback, failedCallback);
  };

  // Creates a store object, depending on serverStatus of the app object
  PersistenceManager.prototype.getPersistanceStrategy = function(mode){

    if(mode !== undefined && mode === 'online') return new serverStorage();
    if(mode !== undefined && mode === 'offline') return new localStorage();

    var status = app.serverStatus;

    if(status === 'offline') return new localStorage();
    if(status === 'online') return new serverStorage();

  };

  return PersistenceManager;

});
