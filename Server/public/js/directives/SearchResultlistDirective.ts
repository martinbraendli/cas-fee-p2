///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbSearchResultlist', searchResultlist);

    interface ISearchResultlistAttributes extends ng.IAttributes {
        user: fettyBossy.Data.IUser;
    }
    function searchResultlist():ng.IDirective {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/searchResultlist.tpl.html',
            controllerAs: 'searchResultlistCtrl',
            controller: fettyBossy.Controllers.SearchResultlistController,
            link: (scope, element, attributes:ISearchResultlistAttributes) => {

                // if directive has a user parameter, set it into the controller
                scope.searchResultlistCtrl.userQuery = attributes.user;
            }
        };
    }
}
