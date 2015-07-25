///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class AddeditRecipeController {

        recipe:fettyBossy.Data.IRecipe;

        public static $inject = ['$log', 'recipe'];

        constructor(private $log:ng.ILogService,
                    recipe:fettyBossy.Data.IRecipe) {
            this.$log.debug('AddeditRecipeController constructor');

            this.recipe = recipe;
        }
    }

    angular
        .module('fettyBossy')
        .controller('AddeditRecipeController', AddeditRecipeController);
}