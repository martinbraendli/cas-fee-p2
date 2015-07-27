///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbSearchResultlist', searchResultlist);

    function searchResultlist():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                recipes: '=recipes',
                recipeFilter: '=recipeFilter'
            },
            templateUrl: 'js/directives/searchResultlist.tpl.html'
        };
    }
}
