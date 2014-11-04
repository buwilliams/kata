'use strict';

var app = angular.module('kata', [
    'ui.router'
]);

app.config(
function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /index
    $urlRouterProvider.otherwise('/index');

    // Now set up the states
    $stateProvider
    .state('index', {
        url: '/index',
        controller: 'IndexCtrl',
        templateUrl: 'features/index.html'
    });
});
