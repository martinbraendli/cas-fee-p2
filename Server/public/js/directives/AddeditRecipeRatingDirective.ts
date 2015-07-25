///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbAddeditRecipeRating', listRecipeRatings);

    interface IAddeditRecipeRatingAttributes extends ng.IAttributes {
        recipeId: string;
        ratingId: string;
    }

    function listRecipeRatings():ng.IDirective {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/addeditRecipeRating.tpl.html',
            controllerAs: 'addediRecipeRatingCtrl',
            controller: fettyBossy.Controllers.AddeditRecipeRatingController,
            link: (scope, element, attributes:IAddeditRecipeRatingAttributes) => {

                // if directive has a recipeId parameter, set it into the controller
                scope.addediRecipeRatingCtrl.setRecipeAndRating(attributes.recipeId, attributes.ratingId);
            }
        };
    }
}
