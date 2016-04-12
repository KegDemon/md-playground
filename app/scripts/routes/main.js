'use strict';

angular.module('demoAppApp')
    .config(function($stateProvider) {
        $stateProvider.state('main', {
            url: '/',
            templateUrl: 'views/main.html',
            controllerAs: 'vm',
            controller: 'MainCtrl'
        });
    });