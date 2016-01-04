/**
 * @ngdoc directive
 * @name gapp.directive:area
 * 
 * @description
 * directive to define area
 */
(function () {
    angular.module('gapp.Area', [])
        .directive('area', function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "apps/partials/areaDirective.tpl.html",
                controller: 'AreaController',
                controllerAs: "space",
                bindToController: true,
                scope: {
                    ShowTheArea: '=',
                    id: "@id",
                    counter: "@counter"
                },
            }
        })
    /**
* @ngdoc controller
* @name gapp.controller:AreaController
* 
* @description
* controller to define area directive
*/
        .controller('AreaController', function ($rootScope) {
            var self = this;
                //Variable to hide and show the area 
            self.ShowTheArea = true;
            //collapse the detail div and shows the brief div
            self.ColapseTheArea = function (id, counter) {
                counter = counter - 1;
                counter = counter + 2;
                if (self.counter < 2) {
                    $rootScope.$broadcast('increaseCounter');
                    self.ShowTheArea = false;
                    var element = angular.element(document.getElementById(id));
                    var elementToDecreasTheWidth = element.parent();
                    elementToDecreasTheWidth[0].style.width = "15%";
                }

            }
            //opens the detail div and close the brief div
            self.OpenTheArea = function (id, counter) {
                self.ShowTheArea = true;
                var element = angular.element(document.getElementById(id));
                var elementToDecreasTheWidth = element.parent();
                elementToDecreasTheWidth[0].style.width = "100%";
                if (self.counter <= 3) {
                    $rootScope.$broadcast('decreaseCounter');
                }
            }
        });
})();

