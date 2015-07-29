///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class AddeditRecipeController {

        recipe:fettyBossy.Data.IRecipe;

        public static $inject = ['$log', 'RepositoryService', '$location', 'recipe'];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository,
                    private $location:ng.ILocationService,
                    recipe:fettyBossy.Data.IRecipe) {
            this.$log.debug('AddeditRecipeController constructor');

            this.recipe = recipe;
        }

        /**
         * save recipe from current form
         */
        save() {
            var $location = this.$location;
            this.repository.saveRecipe(this.recipe)
                .then(function (result:fettyBossy.Services.ISaveRecipeResult) {
                    if (result.successful) {
                        alert("Save ok");
                        $location.path("/viewRecipe/" + result.savedRecipe._id);
                    } else {
                        alert("Save failed");
                    }
                });
        }
    }


    angular
        .module('fettyBossy')
        .controller('AddeditRecipeController', AddeditRecipeController);
}