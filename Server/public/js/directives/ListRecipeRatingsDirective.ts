///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbListRecipeRatings', listRecipeRatings);

    export interface IListRecipeRatingsScope extends ng.IScope {
        recipe: fettyBossy.Data.IRecipe;
        ratings: Array<fettyBossy.Data.IRating>;
    }

    function listRecipeRatings():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                recipe: '=recipe',
                ratings: '=ratings'
            },
            templateUrl: 'js/directives/listRecipeRatings.tpl.html',
            controllerAs: 'listRecipeRatingsCtrl',
            controller: fettyBossy.Controllers.ListRecipeRatingsController
        };
    }
}
