///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    import IRecipe = fettyBossy.Data.IRecipe;
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
                        $scope.teaserTitle = "Neuestes Rezept";

                        var newest = $scope.recipes.sort(function (a:IRecipe, b:IRecipe) {
                            return b.dateCreated - a.dateCreated
                        });
                        $scope.recipe = newest[0];

                        break;
                    case $constants.recipeTeaser.week:
                        $scope.teaserTitle = "Rezept der Woche";
                        break;
                    case $constants.recipeTeaser.best:
                    default:
                        $scope.teaserTitle = "Bestes Rezept";
                        var best = $scope.recipes.sort(function (a:IRecipe, b:IRecipe) {
                            return b.avgRating - a.avgRating
                        });
                        $scope.recipe = best[0];
                }
            }
        };
    }
}
