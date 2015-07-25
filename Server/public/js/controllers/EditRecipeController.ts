///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    interface IRecipeEditRouteParams extends ng.route.IRouteParamsService {
        recipeId: string;
    }

    export class EditRecipeController {

        recipe:fettyBossy.Data.IRecipe;
        searchQuery:string;

        public static $inject = ['$log', '$routeParams', 'RepositoryService'];

        constructor(private $log:ng.ILogService,
                    $routeParams:IRecipeEditRouteParams,
                    private repository:fettyBossy.Services.IRepository) {
            this.$log.debug('ViewRecipeController constructor');

            //this.recipe = repository.getRecipe($routeParams.recipeId);
        }
    }

    angular
        .module('fettyBossy')
        .controller('EditRecipeController', EditRecipeController);
}