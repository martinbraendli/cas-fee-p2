///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    export class SearchResultlistController {

        recipes:Array<fettyBossy.Data.IRecipe>;
        searchQuery:string;
        userQuery:fettyBossy.Data.IUser;

        public static $inject = ['$log', 'Repository'];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository) {
            this.$log.debug('SearchResultlistController constructor');

            this.recipes = repository.getRecipes();
        }
    }

    angular
        .module('fettyBossy')
        .controller('SearchResultlistController', SearchResultlistController);
}