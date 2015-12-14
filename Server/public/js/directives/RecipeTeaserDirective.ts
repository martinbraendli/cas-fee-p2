///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';
    import IRecipe = fettyBossy.Data.IRecipe;

    angular
        .module($injects.fettyBossy)
        .directive('fbRecipeTeaser', recipeTeaser);

    function recipeTeaser():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                type: '=type',
                recipes: '=recipes',
            },
            templateUrl: 'js/directives/recipeTeaser.tpl.html',
            link: ($scope) => {

                switch ($scope.type) {
                    case $constants.recipeTeaser.newest:
                        $scope.teaserTitle = "TEASER_TITLE_NEWEST";

                        var newest = $scope.recipes.sort(function (a:IRecipe, b:IRecipe) {
                            return b.dateCreated - a.dateCreated
                        });
                        $scope.recipe = newest[0];

                        break;
                    case $constants.recipeTeaser.best:
                    default:
                        $scope.teaserTitle = "TEASER_TITLE_BEST";
                        var best = $scope.recipes.sort(function (a:IRecipe, b:IRecipe) {
                            return b.avgRating - a.avgRating
                        });
                        $scope.recipe = best[0];
                }
            }
        };
    }
}
