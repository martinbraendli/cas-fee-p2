///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbMenu', menu);

    function menu():ng.IDirective {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'js/directives/menu.tpl.html',
            controllerAs: 'menu',
            controller: () => {
            },
            link: () => {

            }
        };
    }
}
