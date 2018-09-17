// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
<<<<<<< HEAD
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
=======
    './**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    // For Travis CI only
    chromeOptions: {
      binary: process.env.CHROME_BIN,
      args: ['--no-sandbox']
    }
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
<<<<<<< HEAD
      project: require('path').join(__dirname, './tsconfig.e2e.json')
=======
      project: 'e2e/tsconfig.e2e.json'
>>>>>>> 76bd32226bfd0f1ea432c541a36fbe0afc844fd8
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};