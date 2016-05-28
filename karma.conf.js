var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '.',

    files: [
        'test/*.test.js'
    ],

    plugins: [
        'karma-phantomjs-launcher',
        'karma-jasmine',
        'karma-webpack',
        'karma-html-reporter',
        'karma-junit-reporter',
        'karma-coverage'
    ],

    frameworks: ['jasmine'],

    preprocessors: {
        'test/*.test.js': [ 'webpack' ]
    },

    webpack: {
        module: {
            preLoaders: [{
                test: /\.js$/,
                include: path.resolve('src'),
                loader: 'isparta'
            }]
        }
    },

    webpackMiddleware: {
        noInfo: true 
    },
    
    reporters: ['progress', 'junit', 'html', 'coverage'],
    
    junitReporter: {
        outputDir: 'test_out/results',
        outputFile: 'unit.xml',
        suite: 'unit'
    },

    htmlReporter: {
        outputDir: 'test_out/results',
        outputFile: 'unit.html',
        urlFriendlyName: true
    },

    coverageReporter: {
        dir: 'test_out/coverage',
        reporters: [
            { type: 'text' },
            { type: 'lcov' },
            { type: 'cobertura' }
        ]
    },

    browsers: ['PhantomJS'],
    singleRun: true
  });
};
