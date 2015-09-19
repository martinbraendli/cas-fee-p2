///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbSearchForm', searchForm);

    function searchForm():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                recipeFilter: '=recipeFilter'
            },
            templateUrl: 'js/directives/searchForm.tpl.html'
        };
    }
}
