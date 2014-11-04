module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/bower_components/lodash/dist/lodash.compat.js',
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/bower_components/angular-ui-router/release/angular-ui-router.js',
            'src/features/app.js', /* Must be listed first in features dir */
            'src/features/**/*.js',
            'test/**/*.js'
        ],
        exclude: [],
        port: 8080,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: false
    });
};
