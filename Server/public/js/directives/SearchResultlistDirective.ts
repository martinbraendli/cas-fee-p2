///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbSearchResultlist', searchResultlist);

    function searchResultlist():ng.IDirective {
        return {
            restrict: 'E',
           // scope: {},
            templateUrl: 'js/directives/searchResultlist.tpl.html',
            controllerAs: 'searchResultlistCtrl',
            controller: fettyBossy.Controllers.SearchResultlistController,
            link: () => {

            }
        };
    }
}
