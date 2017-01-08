var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var currentDatePath = "report " + new Date();

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/spec.js'],
  capabilities: {
    browserName: 'firefox'
  },

  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: "./reports/" + currentDatePath + "/",
          screenshotsFolder: "screenshots"
        })
      );
   }

}
