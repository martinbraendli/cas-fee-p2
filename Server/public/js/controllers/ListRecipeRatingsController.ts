///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    export class ListRecipeRatingsController {

        recipe:fettyBossy.Data.IRecipe;

        public static $inject = ['$log', 'Repository', 'SessionService'];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository,
                    private session:fettyBossy.Services.ISession) {
            this.$log.debug('ListRecipeRatingsController constructor');

        }

        setRecipe(recipeId:number) {
            this.$log.debug('ListRecipeRatingsController setRecipe("' + recipeId + '")');
            this.recipe = this.repository.getRecipe(recipeId);
        }

        /**
         * TODO check role and session --> interceptor?
         *
         * check if current user has already added a rating
         */
        hasOwnRating():boolean {
            if (this.session.getUser() == null) {
                return false;
            }

            for(var key in this.recipe.ratings){
                var rating:fettyBossy.Data.IRating = this.recipe.ratings[key];
                if (this.session.getUser().id === rating.author.id) {
                    return true
                }
            }

            // no rating for session-user found
            return false;
        }

        /**
         * returns true if the given rating belongs to the logged in user
         * @param recipe
         */
        isOwnRating(recipe):boolean{
            if (this.session.getUser() == null) {
                return false;
            }
            return (this.session.getUser().id === recipe.author.id);
        }
    }

    angular
        .module('fettyBossy')
        .controller('ListRecipeRatingsController', ListRecipeRatingsController);
}