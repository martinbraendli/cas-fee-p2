///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbAddeditRecipeRating', listRecipeRatings);

    interface IAddeditRecipeRatingAttributes extends ng.IAttributes {
        recipeId: number;
        ratingId: number;
    }

    function listRecipeRatings():ng.IDirective {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/addeditRecipeRating.tpl.html',
            controllerAs: 'addediRecipeRatingCtrl',
            controller: fettyBossy.Controllers.AddeditRecipeRatingController,
            link: (scope, element, attributes:IAddeditRecipeRatingAttributes) => {

                // if directive has a recipeId parameter, set it into the controller
                scope.addediRecipeRatingCtrl.setRecipeAndRating(parseInt(attributes.recipeId), parseInt(attributes.ratingId));
            }
        };
    }
}
