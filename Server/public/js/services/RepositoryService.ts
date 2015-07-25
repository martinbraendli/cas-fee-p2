///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Services {
    'use strict';

    export interface ISaveRecipeResult {
        successful: boolean;
        savedRecipe: fettyBossy.Data.IRecipe;
    }

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
         * save given recipe in backend
         * @param recipe
         */
        saveRecipe(recipe:fettyBossy.Data.IRecipe):ng.IPromise<fettyBossy.Services.ISaveRecipeResult>;

        /**
         * load one user from server by id
         * @param userId
         */
        loadUser(userId:string):ng.IPromise<fettyBossy.Data.IUser>;
        /**
         * load all ratings for given recipe
         * @param recipeId
         */
        loadRatings(recipeId:string):ng.IPromise<Array<fettyBossy.Data.IRating>>;
    }

    class Repository implements IRepository {
        static LOAD_ALL_RECIPES_URL:string = '/api/recipe';
        static LOAD_RECIPE_BY_ID:string = '/api/recipe/';
        static SAVE_RECIPE:string = '/api/recipe';
        static LOAD_USER_BY_ID:string = '/api/user/';
        static LOAD_RATINGS_BY_RECIPE_ID:string = '/api/rating/';

        recipes:Array<fettyBossy.Data.IRecipe> = [];

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

            var filterById = function (recipe) {
                //if
            }

            return this.getRecipes()[recipeId]; // TODO find by id
        }

        saveRecipe(recipe:fettyBossy.Data.IRecipe) {
            this.$log.debug('Repository saveRecipe(' + recipe + ')');
            var deferred = this.$q.defer();

            var response:fettyBossy.Services.ISaveRecipeResult;
            var response = <fettyBossy.Services.ISaveRecipeResult>{};

            this.$http.post(Repository.SAVE_RECIPE, recipe)
                .success((recipe) => {
                    response.successful = true;
                    response.savedRecipe = recipe;
                    deferred.resolve(response);
                }).error((data, status, header, config) => {
                    response.successful = false;
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        loadUser(userId:string):ng.IPromise<fettyBossy.Data.IUser> {
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

        loadRatings(recipeId:string):ng.IPromise<Array<fettyBossy.Data.IRating>> {
            this.$log.debug('Repository loadRatings(' + recipeId + ')');
            var deferred = this.$q.defer();

            this.$http.get(Repository.LOAD_RATINGS_BY_RECIPE_ID + recipeId).then((data) => {
                var ratings:Array<fettyBossy.Data.IRating>;
                ratings = <Array<fettyBossy.Data.IRating>>(data.data);
                this.$log.debug("Repository loadRatings(" + recipeId + ") - loaded '" + ratings.length + "' ratings");
                deferred.resolve(ratings);
            });

            return deferred.promise;
        }
    }

    angular.module('fettyBossy')
        .service('RepositoryService', Repository);
}
