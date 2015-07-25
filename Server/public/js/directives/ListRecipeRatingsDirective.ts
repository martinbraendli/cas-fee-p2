///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbListRecipeRatings', listRecipeRatings);

    interface IListRecipeRatingsAttributes extends ng.IAttributes {
        recipeId: string;
    }

    function listRecipeRatings():ng.IDirective {
        return {
            restrict: 'E',
            templateUrl: 'js/directives/listRecipeRatings.tpl.html',
            controllerAs: 'listRecipeRatingsCtrl',
            controller: fettyBossy.Controllers.ListRecipeRatingsController,
            link: (scope, element, attributes:IListRecipeRatingsAttributes) => {

                scope.listRecipeRatingsCtrl.setRecipe(attributes.recipeId);
            }
        };
    }
}
