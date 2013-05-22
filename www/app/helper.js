// Filename: helper.js

define([
  'jquery',
], function($){
  
    // Liest einen Querystring aus der URL
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

    // Konvertiert ein Datum vom Typ Kendo.Date zu einem String, der durch den WCF Serializer verstanden wird
    var dateToWcfFormat = function(dateString) {
    console.log(dateString);
      var date = new Date(dateString);
      console.log(date);
      var parsedDate = '\/Date(' + date.getTime() + '-0000)\/';
      return parsedDate;
    };

    return {
        getQueryString: getQueryString,
        dateToWcfFormat: dateToWcfFormat
    };
});
