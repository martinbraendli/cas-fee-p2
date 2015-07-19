///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Services {
    'use strict';


    export interface IRepository {
        getRecipes():Array<fettyBossy.Data.IRecipe>;
        getRecipe(recipeId:number);
    }

    class Repository implements IRepository{
        recipes:fettyBossy.Data.IRecipe[] = [];

        constructor(private $log:ng.ILogService) {
            this.$log.debug('Repository constructor');

        }

        getRecipes():Array<fettyBossy.Data.IRecipe> {
            this.$log.debug('Repository getRecipes');

            this.recipes = [];

            var recipe = <fettyBossy.Data.IRecipe>{};
            recipe.id = 0;
            recipe.title = "Tomatensauce mit Thymian";
            this.recipes.push(recipe);

            var recipe = <fettyBossy.Data.IRecipe>{};
            recipe.id = 1;
            recipe.title = "Spaghetti Carbonara";
            recipe.author = <fettyBossy.Data.IUser>{};
            recipe.author.id = 2;
            recipe.author.name = "authorname";
            recipe.bakingTime = 150;
            this.recipes.push(recipe);

            var recipe = <fettyBossy.Data.IRecipe>{};
            recipe.id = 2;
            recipe.title = "Lasagne";
            this.recipes.push(recipe);

            var recipe = <fettyBossy.Data.IRecipe>{};
            recipe.id = 3;
            recipe.title = "Hamburger mit Speck und Ei";
            this.recipes.push(recipe);

            var recipe = <fettyBossy.Data.IRecipe>{};
            recipe.id = 4;
            recipe.title = "Sandwich mit Thon";
            this.recipes.push(recipe);

            var recipe = <fettyBossy.Data.IRecipe>{};
            recipe.id = 5;
            recipe.title = "Eier-Salat";
            this.recipes.push(recipe);
            return this.recipes;
        }

        getRecipe(recipeId:number):fettyBossy.Data.IRecipe {
            this.$log.debug('Repository getRecipe("' + recipeId + '")');

            return this.getRecipes()[recipeId]; // TODO find by id
        }
    }

    angular.module('fettyBossy')
        .service('Repository', Repository);
}
