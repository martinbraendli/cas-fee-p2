///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class ViewRecipeController {

        recipe:fettyBossy.Data.IRecipe;

        public static $inject = ['$log', 'recipe'];

        constructor(private $log:ng.ILogService,
                    recipe:fettyBossy.Data.IRecipe) {
            this.$log.debug('ViewRecipeController constructor');
            this.recipe = recipe;
        }
    }

    angular
        .module('fettyBossy')
        .controller('ViewRecipeController', ViewRecipeController);
}