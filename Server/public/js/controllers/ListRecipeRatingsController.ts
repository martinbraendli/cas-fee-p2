///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    export class ListRecipeRatingsController {

        recipe:fettyBossy.Data.IRecipe;

        public static $inject = ['$log', 'Repository'];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository) {
            this.$log.debug('ListRecipeRatingsController constructor');

        }

        setRecipe(recipeId:number) {
            this.$log.debug('ListRecipeRatingsController setRecipe("' + recipeId + '")');
            this.recipe = this.repository.getRecipe(recipeId);
        }
    }

    angular
        .module('fettyBossy')
        .controller('ListRecipeRatingsController', ListRecipeRatingsController);
}