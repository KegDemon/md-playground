'use strict';

/**
 * @ngdoc overview
 * @name demoAppApp
 * @description
 * # demoAppApp
 *
 * Main module of the application.
 */
angular
    .module('demoAppApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngMaterial',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ui.router'
    ])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
