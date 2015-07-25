///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Filter {
    'use strict';

    export interface ISearchRecipeFilter {
        text:string;
        userId:string;
    }

    export function SearchRecipeFilter() {
        return function (recipes:Array<fettyBossy.Data.IRecipe>,
                         recipeFilter:fettyBossy.Filter.ISearchRecipeFilter):Array<fettyBossy.Data.IRecipe> {
            var resultRecipes:Array<fettyBossy.Data.IRecipe> = recipes;
            // 1. filter by user
            if (recipeFilter.userId) {
                var filterByUserId = function (recipe) {
                    if (recipe.author && recipe.author._id) {
                        return (recipe.author._id === recipeFilter.userId);
                    }
                    // no author on recipe set
                    return false;
                };
                resultRecipes = recipes.filter(filterByUserId);
            }

            // 2. filter by text
            if (recipeFilter.text) {
                var filterByText = function (recipe) {
                    return (recipe.title.toLowerCase().indexOf(recipeFilter.text.toLowerCase()) > -1);
                };
                resultRecipes = resultRecipes.filter(filterByText);
            }

            return resultRecipes;
        };
    }

    angular.module('fettyBossy')
        .filter('SearchRecipeFilter', SearchRecipeFilter);
}
