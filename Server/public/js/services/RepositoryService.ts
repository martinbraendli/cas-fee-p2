///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Services {
    'use strict';


    export interface IRepository {
        /**
         * load all available recipes from server - hold result in this.recipes
         */
        loadRecipes():ng.IPromise<Array<fettyBossy.Data.IRecipe>>;
        /**
         * load one recipe from server by id
         * @param recipeId
         */
        loadRecipe(recipeId:string):ng.IPromise<fettyBossy.Data.IRecipe>;
        /**
         * returns loaded recipes
         */
        getRecipes():Array<fettyBossy.Data.IRecipe>;

        getRecipe(recipeId:string);

        /**
         * load one user from server by id
         * @param userId
         */
        loadUser(userId:string):ng.IPromise<fettyBossy.Data.IUser>;
    }

    class Repository implements IRepository {
        static LOAD_ALL_RECIPES_URL:string = '/api/recipe';
        static LOAD_RECIPE_BY_ID:string = '/api/recipe/';
        static LOAD_USER_BY_ID:string = '/api/user/';

        recipes:Array<fettyBossy.Data.IRecipe> = [];
        users:Array<fettyBossy.Data.IUser> = [];

        public static $inject = ['$log', '$http', '$q'];

        constructor(private $log:ng.ILogService,
                    private $http:ng.IHttpService,
                    private $q:ng.IQService) {
            this.$log.debug('Repository constructor');
        }

        loadRecipes():ng.IPromise<Array<fettyBossy.Data.IRecipe>> {
            this.$log.debug('Repository loadRecipes()');
            var deferred = this.$q.defer();

            this.$http.get(Repository.LOAD_ALL_RECIPES_URL).then((data) => {
                this.recipes = <Array<fettyBossy.Data.IRecipe>> data.data;
                this.$log.debug('Repository loadRecipes() - loaded recipes, returning ' + this.recipes.length + ' recipes');
                deferred.resolve(this.recipes);
            });

            return deferred.promise;
        }

        loadRecipe(recipeId:string):ng.IPromise<fettyBossy.Data.IRecipe> {
            this.$log.debug('Repository loadRecipe(' + recipeId + ')');
            var deferred = this.$q.defer();

            this.$http.get(Repository.LOAD_RECIPE_BY_ID + recipeId).then((data) => {
                var recipe:fettyBossy.Data.IRecipe;
                recipe = <fettyBossy.Data.IRecipe>(data.data);
                this.$log.debug('Repository loadRecipe(' + recipeId + ') - loaded recipe');
                deferred.resolve(recipe);
            });

            return deferred.promise;
        }

        getRecipes():Array<fettyBossy.Data.IRecipe> {
            if (!this.recipes) {
                this.$log.debug('Repository getRecipes() - no recipes found');
                return [];
            }
            this.$log.debug('Repository getRecipes() - returning ' + this.recipes.length + ' recipes');
            return this.recipes;
        }

        getRecipe(recipeId:string):fettyBossy.Data.IRecipe {
            this.$log.debug('Repository getRecipe("' + recipeId + '")');

            return this.getRecipes()[recipeId]; // TODO find by id
        }

        loadUser(userId:string):ng.IPromise<fettyBossy.Data.IUser>{
            this.$log.debug('Repository loadUser(' + userId + ')');
            var deferred = this.$q.defer();

            this.$http.get(Repository.LOAD_USER_BY_ID + userId).then((data) => {
                var user:fettyBossy.Data.IUser;
                user = <fettyBossy.Data.IUser>(data.data);
                this.$log.debug('Repository loadUser(' + userId + ') - loaded user');
                deferred.resolve(user);
            });

            return deferred.promise;
        }
    }

    angular.module('fettyBossy')
        .service('RepositoryService', Repository);
}
