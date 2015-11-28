///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';
    import IRating = fettyBossy.Data.IRating;
    import IRecipe = fettyBossy.Data.IRecipe;

    export class ViewRecipeController {

        recipe:IRecipe;
        ratings:IRating[];

        public static $inject = [
            $injects.$log,
            'recipe',
            'ratings'];

        constructor(private $log:ng.ILogService,
                    recipe:fettyBossy.Data.IRecipe,
                    ratings:Array<IRating>) {
            this.$log.debug('ViewRecipeController constructor');
            this.recipe = recipe;
            this.ratings = ratings;
        }
    }

    angular
        .module($injects.fettyBossy)
        .controller($injects.controllers.viewRecipeController, ViewRecipeController);
}