///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module($injects.fettyBossy)
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
