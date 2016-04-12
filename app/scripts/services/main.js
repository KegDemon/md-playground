'use strict';

angular.module('demoAppApp')
    .service('MainSvc', ['$http', function($http) {
        
        this.get = function(page, size) {
            var params = {
                page: page || 1,
                results: size || 50
            };
            
            return $http.get('https://randomuser.me/api/', {params: params}).then(function(r) {
                return r.data;
            });
        };
    }]);