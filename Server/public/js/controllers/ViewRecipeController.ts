///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    interface IRecipeViewRouteParams extends ng.route.IRouteParamsService {
        recipeId: number;
    }

    export class ViewRecipeController {

        recipe:fettyBossy.Data.IRecipe;
        searchQuery:string;

        public static $inject = ['$log', '$routeParams', 'Repository'];

        constructor(private $log:ng.ILogService,
                    $routeParams : IRecipeViewRouteParams,
                    private repository:fettyBossy.Services.IRepository) {
            this.$log.debug('ViewRecipeController constructor');

            this.recipe = repository.getRecipe(parseInt($routeParams.recipeId));
        }
    }

    angular
        .module('fettyBossy')
        .controller('ViewRecipeController', ViewRecipeController);
}