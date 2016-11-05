module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // paths loaded by Karma
      {pattern: 'node_modules/core-js/client/shim.min.js', included: true, watched: true},
      {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
      {pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/**/*.js', included: true, watched: true},
    //   {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
    //   {pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: true},
    //   {pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: true},

      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: '**/*.js', included: false, watched: true},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      {pattern: '**/*.html', included: false, watched: true},
      {pattern: '**/*.css', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
    //   {pattern: 'src/**/*.ts', included: false, watched: false},
    //   {pattern: '**/*.js.map', included: false, watched: false}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      "/app/": "/base/app/"
    },

    htmlReporter: {
      outputFile: 'report/index.html'
    },

    reporters: ["nyan"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  })
}