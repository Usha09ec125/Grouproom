    /**
* @ngdoc controller
* @name gapp.controller:indexController
* 
* @description
* controller to define index
*/
(function () {
    var gapp = angular.module('gapp', ['gapp.Area'])
        .controller('indexController', function ($rootScope) {
            var self = this;
            self.counter = 0;
            //Increase the value of counter 
            $rootScope.$on('increaseCounter', function (ev, data) {
                self.counter = self.counter + 1;
            })
            //Decrease the value of counter
            $rootScope.$on('decreaseCounter', function (ev, data) {
                self.counter = self.counter - 1;
            })
        })
})();