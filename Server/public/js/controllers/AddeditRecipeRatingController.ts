///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class AddeditRecipeRatingController {

        recipe:fettyBossy.Data.IRecipe;

        public static $inject = ['$log', 'RepositoryService', 'SessionService'];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository,
                    private session:fettyBossy.Services.ISession) {
            this.$log.debug('AddeditRecipeRatingController constructor');

        }

        setRecipeAndRating(recipeId:string, ratingId:string) {
            this.$log.debug("AddeditRecipeRatingController setRecipeAndRating('" + recipeId + "', '" + ratingId + "')");
            this.recipe = this.repository.getRecipe(recipeId);
            //this.rating = recipe // todo get rating
        }
    }

    angular
        .module('fettyBossy')
        .controller('AddeditRecipeRatingController', AddeditRecipeRatingController);
}