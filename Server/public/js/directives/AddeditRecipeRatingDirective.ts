///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbAddeditRecipeRating', listRecipeRatings);

    export interface IAddeditRecipeRatingScope extends ng.IScope {
        rating: fettyBossy.Data.IRating;
        recipeId: string;
    }

    function listRecipeRatings():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                recipeId: '=recipeId',
                rating: '=rating',
                showAsEdit: '=showAsEdit'
            },
            templateUrl: 'js/directives/addeditRecipeRating.tpl.html',
            controllerAs: 'addeditRecipeRatingCtrl',
            controller: fettyBossy.Controllers.AddeditRecipeRatingController
        };
    }
}
