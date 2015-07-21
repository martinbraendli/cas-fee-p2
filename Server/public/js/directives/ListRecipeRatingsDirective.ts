///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbListRecipeRatings', listRecipeRatings);

    interface IListRecipeRatingsAttributes extends ng.IAttributes {
        recipeId: number;
    }

    function listRecipeRatings():ng.IDirective {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/listRecipeRatings.tpl.html',
            controllerAs: 'listRecipeRatingsCtrl',
            controller: fettyBossy.Controllers.ListRecipeRatingsController,
            link: (scope, element, attributes:IListRecipeRatingsAttributes) => {

                // if directive has a recipeId parameter, set it into the controller
                scope.listRecipeRatingsCtrl.setRecipe(parseInt(attributes.recipeId));
            }
        };
    }
}
