require.config({
  paths: {
    'js': '../js/',
    'languageManagerTest': 'spec/languageManagerTest',
    "domReady": "../js/vendor/require/domReady",
  }
});

require([
  "domReady!",
  'languageManagerTest'

],function( document ){
  jasmine.getEnv().addReporter(
      new jasmine.HtmlReporter()
  );

  console.log("initialize");

  jasmine.getEnv().execute();
});
