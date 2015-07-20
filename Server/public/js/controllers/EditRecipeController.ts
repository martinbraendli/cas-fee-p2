///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    interface IRecipeEditRouteParams extends ng.route.IRouteParamsService {
        recipeId: number;
    }

    export class EditRecipeController {

        recipe:fettyBossy.Data.IRecipe;
        searchQuery:string;

        public static $inject = ['$log', '$routeParams', 'Repository'];

        constructor(private $log:ng.ILogService,
                    $routeParams:IRecipeEditRouteParams,
                    private repository:fettyBossy.Services.IRepository) {
            this.$log.debug('ViewRecipeController constructor');

            this.recipe = repository.getRecipe(parseInt($routeParams.recipeId));
        }
    }

    angular
        .module('fettyBossy')
        .controller('EditRecipeController', EditRecipeController);
}