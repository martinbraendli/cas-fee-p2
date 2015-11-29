///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module($injects.fettyBossy)
        .directive('fbSearchResultlist', searchResultlist);

    var controller = ['$scope', function ($scope) {
        $scope.showMoreRecipes = function () {
            $scope.maxRecipes = $scope.maxRecipes + 10;
        };
    }];

    function searchResultlist():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                recipes: '=recipes',
                recipeFilter: '=recipeFilter'
            },
            templateUrl: 'js/directives/searchResultlist.tpl.html',
            controller: controller,
            link: ($scope) => {
                $scope.maxRecipes = 10;

                $scope.starName = function(rating:IRating, starNumber:number):string {
                    if (rating >= starNumber) {
                        return "star_border";
                    }
                    return "star";
                }
            }
        }
    }
}
