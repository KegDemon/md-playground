'use strict';

/**
 * @ngdoc function
 * @name demoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAppApp
 */
angular.module('demoAppApp')
    .controller('MainCtrl', ['$mdDialog', 'MainSvc', function($mdDialog, svc) {
        var vm = this;

        

        vm.newCompanyDialog = function newCompanyDialog() {
            
        };
        
        vm.openCompanyDialog = function openCompanyDialog() {
            $mdDialog.show({
                templateUrl: 'views/_partials/openCompany.alert.tpl.html',
                controller: ['$mdDialog', function(thisDialog) {
                    var self = this;
                    
                    self.open = thisDialog.hide;
                    self.close = thisDialog.cancel;
                    
                    self.searchText = '';
                    self.selectedItem = void 0;
                    
                    self.dataStore = [];

                    self.page = 1;
                    self.size = 10;

                    svc.get(self.page, self.size).then(function(data) {
                        self.dataStore = self.dataStore.concat(data.results);
                    });
                    
                }],
                controllerAs: 'openCompany'
            }).then(function(selection) {
                console.info ( selection ) ;
            });
        };
        

    }]);
