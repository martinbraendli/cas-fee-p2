///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Services {
    'use strict';


    export interface IRepository {
        getRecipes():Array<fettyBossy.Data.IRecipe>;
        getRecipe(recipeId:number);
    }

    class Repository implements IRepository {
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
            recipe.numPerson = 4;
            recipe.images = <fettyBossy.Data.IImage>[];
            var img = <fettyBossy.Data.IImage>{};
            img.id = 0;
            img.src = "js/data/IMG_4344.JPG";
            img.author = recipe.author;
            recipe.images.push(img);
            recipe.bakingTime = 150;
            recipe.ratings = <fettyBossy.Data.IRating>[];
            var rating = <fettyBossy.Data.IRating>{};
            rating.comment = "Isch super";
            rating.author = <fettyBossy.Data.IUser>{};
            rating.author.id = 2;
            rating.stars = 4;
            recipe.ratings.push(rating);
            var rating = <fettyBossy.Data.IRating>{};
            rating.comment = "Eher mies";
            rating.stars = 2;
            rating.author = <fettyBossy.Data.IUser>{};
            rating.author.id = 3;
            recipe.ratings.push(rating);
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
