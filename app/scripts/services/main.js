'use strict';

angular.module('demoAppApp')
    .service('MainSvc', ['$http', function($http) {

        this.get = function(page, size) {
            var params = {
                page: page || 1,
                results: size || 50
            };

            return $http.get('https://randomuser.me/api/', { params: params }).then(function(r) {
                return r.data;
            });
        };

        // Set as function to return new instance each time
        // and prevent possible issues with browser caching
        this.base = function base() {
            return {
                "gender": "",
                "name": {
                    "title": "",
                    "first": "",
                    "last": ""
                },
                "location": {
                    "street": "",
                    "city": "",
                    "state": "",
                    "postcode": null
                },
                "email": "",
                "login": {
                    "username": "",
                    "password": "",
                    "salt": "",
                    "md5": "",
                    "sha1": "",
                    "sha256": ""
                },
                "registered": null,
                "dob": null,
                "phone": "",
                "cell": "",
                "id": {
                    "name": "",
                    "value": ""
                },
                "picture": {
                    "large": "",
                    "medium": "",
                    "thumbnail": ""
                },
                "nat": ""
            };
        };

    }]);