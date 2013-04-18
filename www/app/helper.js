// Filename: helper.js

define([
  'jquery',
], function($){
  
	var getQueryString = function(param){
        /*var pageURL = window.location;
        console.log(pageURL);
        var urlVariables = pageURL.split('&');
        console.log(urlVariables);
        for (var i = 0; i < urlVariables.length; i++) 
        {
            var parameterName = urlVariables[i].split('=');
            if (parameterName[0] == param) 
            {
                return parameterName[1];
            }
        }*/
    };

    return {
        getQueryString: getQueryString
    };
});
