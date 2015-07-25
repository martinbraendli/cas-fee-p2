///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbAddeditRecipeRating', listRecipeRatings);

    function listRecipeRatings():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                recipeId: '=recipeId',
                rating: '=rating'
            },
            templateUrl: 'js/directives/addeditRecipeRating.tpl.html',
            controllerAs: 'addeditRecipeRatingCtrl',
            controller: fettyBossy.Controllers.AddeditRecipeRatingController
        };
    }
}
