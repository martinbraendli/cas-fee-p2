///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export interface ISearchRecipeFilter {
        text:string;
        userId:string;
    }

    export class SearchRecipeController {

        recipes:Array<fettyBossy.Data.IRecipe>;
        recipeFilter:ISearchRecipeFilter;

        //searchQuery:string;
        //userQuery:fettyBossy.Data.IUser;

        public static $inject = ['$log', 'recipes'];

        constructor(private $log:ng.ILogService,
                    recipes:Array<fettyBossy.Data.IRecipe>) {
            $log.debug('SearchRecipeController constructor');
            this.recipes = recipes;
            this.recipeFilter = <fettyBossy.Filter.ISearchRecipeFilter>{};
        }
    }

    angular
        .module('fettyBossy')
        .controller('SearchRecipeController', SearchRecipeController);
}