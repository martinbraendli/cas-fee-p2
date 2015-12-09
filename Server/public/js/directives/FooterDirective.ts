///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module($injects.fettyBossy)
        .directive('fbFooter', footer);

    function footer():ng.IDirective {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'js/directives/footer.tpl.html',
            controllerAs: 'footer',
            controller: () => {
            },
            link: () => {

            }
        };
    }
}