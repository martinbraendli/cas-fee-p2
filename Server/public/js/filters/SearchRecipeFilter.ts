///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Filter {
    'use strict';

    export interface ISearchRecipeFilter {
        text:string;
        userId:string;

        showSearchOptions:boolean;

        vorspeise:boolean;
        hauptspeise:boolean;
        dessert:boolean;
        snack:boolean;

        rating:number;
        backzeit:number;

        // sorting
        orderBy:string;
        orderAsc:boolean;
    }

    export function SearchRecipeFilter() {
        return function (recipes:Array<fettyBossy.Data.IRecipe>,
                         recipeFilter:fettyBossy.Filter.ISearchRecipeFilter):Array<fettyBossy.Data.IRecipe> {
            if (!recipes || recipes.length == 0) {
                return recipes;
            }

            var resultRecipes:Array<fettyBossy.Data.IRecipe> = recipes;
            // 1. filter by user
            if (recipeFilter.userId) {
                var filterByUserId = function (recipe:fettyBossy.Data.IRecipe) {
                    if (recipe.userId) {
                        return (recipe.userId === recipeFilter.userId);
                    }
                    // no author on recipe set
                    return false;
                };
                resultRecipes = recipes.filter(filterByUserId);
            }

            // 2. filter by text
            if (recipeFilter.text) {
                var filterByText = function (recipe:fettyBossy.Data.IRecipe) {
                    if (!recipe.title) {
                        return false;
                    }
                    return (recipe.title.toLowerCase().indexOf(recipeFilter.text.toLowerCase()) > -1);
                };
                resultRecipes = resultRecipes.filter(filterByText);
            }

            // 3. additional search options
            if (recipeFilter.showSearchOptions) {

                // category
                if (recipeFilter.dessert || recipeFilter.hauptspeise || recipeFilter.dessert || recipeFilter.snack) {
                    var filterByCategory = function (recipe:fettyBossy.Data.IRecipe) {
                        if (recipeFilter.dessert && recipe.category === "dessert") {
                            return true;
                        }
                        if (recipeFilter.hauptspeise && recipe.category === "hauptspeise") {
                            return true;
                        }
                        if (recipeFilter.dessert && recipe.category === "dessert") {
                            return true;
                        }
                        if (recipeFilter.snack && recipe.category === "snack") {
                            return true;
                        }
                        return false;
                    };
                    resultRecipes = resultRecipes.filter(filterByCategory);
                }

                // rating
                if (recipeFilter.rating) {
                    var filterByRating = function (recipe:fettyBossy.Data.IRecipe) {
                        if (!recipe.avgRating) {
                            return false;
                        }
                        return (recipe.avgRating >= recipeFilter.rating);
                    };
                    resultRecipes = resultRecipes.filter(filterByRating);
                }

                // backzeit
                if (recipeFilter.backzeit) {
                    var filterByBackzeit = function (recipe:fettyBossy.Data.IRecipe) {
                        if (!recipe.bakingTime) {
                            return false;
                        }
                        return (recipe.bakingTime <= recipeFilter.backzeit);
                    };
                    resultRecipes = resultRecipes.filter(filterByBackzeit);
                }
            }

            return resultRecipes;
        };
    }

    angular.module($injects.fettyBossy)
        .filter($injects.filter.searchRecipeFilter, SearchRecipeFilter);
}
