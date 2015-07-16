///<reference path='../../../../typings/tsd.d.ts' />
module myApp.Directive {
    'use strict';

    angular
        .module('myApp')
        .directive('cdMenu', menu);

    function menu():ng.IDirective {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'views/menu.tpl.html',
            controllerAs: 'menu',
            controller: () => {
            },
            link: () => {

            }
        };
    }
}
