///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    import ISearchRecipeFilter = fettyBossy.Filter.ISearchRecipeFilter;
    'use strict';

    export class SearchRecipeController {

        recipes:Array<fettyBossy.Data.IRecipe>;
        recipeFilter:ISearchRecipeFilter;

        public static $inject = [
            $injects.$log,
            'recipes'];

        constructor(private $log:ng.ILogService,
                    recipes:Array<fettyBossy.Data.IRecipe>) {
            $log.debug('SearchRecipeController constructor');
            this.recipes = recipes;
            this.recipeFilter = <fettyBossy.Filter.ISearchRecipeFilter>{};
            this.recipeFilter.showSearchOptions = false;
            this.recipeFilter.rating = 1;
        }
    }

    angular
        .module($injects.fettyBossy)
        .controller($injects.controllers.searchRecipeController, SearchRecipeController);
}