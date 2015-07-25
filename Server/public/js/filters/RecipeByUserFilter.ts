///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Services {
    'use strict';

    export function RecipeByUserFilter() {
        return function (recipes:Array<fettyBossy.Data.IRecipe>,
                         userId:number):Array<fettyBossy.Data.IRecipe> {
            if (!userId) {
                // no filter for user, use all recipes
                return recipes;
            }

            // show only recipes from given user
            var filteredRecipes:Array<fettyBossy.Data.IRecipe> = [];
            for (var key in recipes) {
                var recipe:fettyBossy.Data.IRecipe = recipes[key];
                if (recipe.author && recipe.author._id === userId) {
                    filteredRecipes.push(recipe);
                }
            }
            return filteredRecipes;
        };
    }

    angular.module('fettyBossy')
        .filter('recipeByUserFilter', RecipeByUserFilter);
}
