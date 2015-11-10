'use strict';
window.app = angular.module('BeckyleeApp', ['ui.router', 'ui.bootstrap']);

app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');
    console.log('starting up the app');

});

