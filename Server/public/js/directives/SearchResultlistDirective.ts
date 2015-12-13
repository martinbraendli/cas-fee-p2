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

        $scope.orderBy = function (fieldName) {
            if ($scope.recipeFilter.orderBy == fieldName) {
                $scope.recipeFilter.orderAsc = !$scope.recipeFilter.orderAsc;
            } else {
                $scope.recipeFilter.orderBy = fieldName;
                $scope.recipeFilter.orderAsc = false;
            }
        }
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
                $scope.recipeFilter.orderBy = 'dateCreated';
                $scope.recipeFilter.orderAsc = true;

                $scope.starName = function (rating:IRating, starNumber:number):string {
                    if (rating >= starNumber) {
                        return "star";
                    }
                    return "star_border";
                };

                /**
                 * Return name of icon which displays the current ordering
                 */
                $scope.orderName = function (fieldName):string {
                    if ($scope.recipeFilter.orderBy === fieldName) {
                        if ($scope.recipeFilter.orderAsc) {
                            return "vertical_align_bottom"
                        }
                        return "vertical_align_top"
                    }
                }
            }
        }
    }
}
