///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Services {
    'use strict';
    import IRating = fettyBossy.Data.IRating;

    export interface ISaveRecipeResult {
        successful: boolean;
        savedRecipe: fettyBossy.Data.IRecipe;
    }

    export interface ISaveRatingResult {
        successful: boolean;
        savedRating: fettyBossy.Data.IRating
    }

    export interface IRegisterUserResult {
        successful: boolean;
        message: string;
        registeredUser: fettyBossy.Data.IUser;
    }

    export interface IRepository {
        /**
         * load all available recipes from server - hold result in this.recipes
         */
        loadRecipes():ng.IPromise<Array<fettyBossy.Data.IRecipe>>;
        loadRecipesByUser(userId:string):ng.IPromise<Array<fettyBossy.Data.IRecipe>>;
        /**
         * load one recipe from server by id
         * @param recipeId
         */
        loadRecipe(recipeId:string):ng.IPromise<fettyBossy.Data.IRecipe>;
        /**
         * save given recipe in backend
         * @param recipe
         */
        saveRecipe(recipe:fettyBossy.Data.IRecipe):ng.IPromise<fettyBossy.Services.ISaveRecipeResult>;
        /**
         * load all ratings for given recipe
         * @param recipeId
         */
        loadRatings(recipeId:string):ng.IPromise<Array<fettyBossy.Data.IRating>>;
        /**
         * save given ratign
         * @param rating
         */
        saveRating(rating:fettyBossy.Data.IRating):ng.IPromise;

        addListener(callback);
    }

    class Repository implements IRepository {
        static LOAD_ALL_RECIPES_URL:string = '/api/recipes';
        static LOAD_ALL_RECIPES_BY_USER_URL:string = '/api/recipes/byUser/';
        static LOAD_RECIPE_BY_ID:string = '/api/recipes/';
        static SAVE_RECIPE:string = '/api/recipes';

        static LOAD_RATINGS_BY_RECIPE_ID:string = '/api/ratings/';
        static SAVE_RATING:string = '/api/ratings';

        listener = [];

        public static $inject = ['$log', '$http', '$q'];

        constructor(private $log:ng.ILogService,
                    private $http:ng.IHttpService,
                    private $q:ng.IQService) {
            this.$log.debug('Repository constructor');
        }

        loadRecipes():ng.IPromise<Array<fettyBossy.Data.IRecipe>> {
            this.$log.debug('Repository loadRecipes()');
            var deferred = this.$q.defer();

            this.$http.get(Repository.LOAD_ALL_RECIPES_URL).then(
                // success
                (data) => {
                    var recipes = <Array<fettyBossy.Data.IRecipe>> data.data;
                    this.$log.debug('Repository loadRecipes() - loaded recipes, returning ' + recipes.length + ' recipes');
                    deferred.resolve(recipes);
                },
                // error
                (reason) => {
                    this.$log.warn("Repository loadRecipes() - loaded recipes failed, returning:" + reason);
                    deferred.reject(reason);
                }
            );
            return deferred.promise;
        }

        loadRecipesByUser(userId:string):ng.IPromise<Array<fettyBossy.Data.IRecipe>> {
            this.$log.debug("Repository loadRecipesByUser('" + userId + "')");
            var deferred = this.$q.defer();

            this.$http.get(Repository.LOAD_ALL_RECIPES_BY_USER_URL + userId).then(
                // success
                (data) => {
                    var loadedRecipes = <Array<fettyBossy.Data.IRecipe>>data.data;
                    this.$log.debug("Repository loadRecipesByUser('" + userId + "') - loaded recipes, returning '" + loadedRecipes.length + "' recipes");
                    deferred.resolve(loadedRecipes);
                },
                // error
                (reason) => {
                    this.$log.warn("Repository loadRecipesByUser('" + userId + "') - loaded recipes failed, returning:" + reason);
                    deferred.reject(reason);
                }
            );

            return deferred.promise;
        }

        loadRecipe(recipeId:string):ng.IPromise<fettyBossy.Data.IRecipe> {
            this.$log.debug('Repository loadRecipe(' + recipeId + ')');
            var deferred = this.$q.defer();

            this.$http.get(Repository.LOAD_RECIPE_BY_ID + recipeId).then(
                // success
                (data) => {
                    var recipe:fettyBossy.Data.IRecipe;
                    recipe = <fettyBossy.Data.IRecipe>(data.data);
                    this.$log.debug('Repository loadRecipe(' + recipeId + ') - loaded recipe');
                    deferred.resolve(recipe);
                },
                // error
                (reason) => {
                    this.$log.warn("Repository loadRecipe('" + recipeId + "') - loaded recipe failed, returning:" + reason);
                    deferred.reject(reason);
                }
            );

            return deferred.promise;
        }

        saveRecipe(recipe:fettyBossy.Data.IRecipe):ng.IPromise {
            this.$log.debug('Repository saveRecipe(' + recipe + ')');
            var deferred = this.$q.defer();

            var response = <fettyBossy.Services.ISaveRecipeResult>{};

            this.$http.post(Repository.SAVE_RECIPE, recipe)
                .success((recipe) => {
                    //response.successful = true;
                    response.savedRecipe = <fettyBossy.Data.IRecipe>recipe;
                    deferred.resolve(response);
                })
                .error((data, status, header, config) => {
                    this.$log.warn("Repository saveRecipe('" + recipe + "') - failed, returning:" + status);
                    deferred.reject(response);
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

        saveRating(rating:fettyBossy.Data.IRating):ng.IPromise<fettyBossy.Data.IRating> {
            this.$log.debug('Repository saveRating(' + rating + ')');
            var deffered = this.$q.defer();

            this.$http.post(Repository.SAVE_RATING, rating).then((data) => {
                var rating = <IRating>data.data;

                var result = <ISaveRatingResult>{};
                result.successful = true;
                result.savedRating = rating;

                this.notifyListener();

                deffered.resolve(rating);
            });

            return deffered.promise;
        }

        addListener(callback) {
            this.listener.push(callback)
        }

        private notifyListener() {
            this.listener.forEach(function (listener) {
                listener();
            });
        }
    }

    angular.module($injects.fettyBossy)
        .service($injects.services.repositoryService, Repository);
}
