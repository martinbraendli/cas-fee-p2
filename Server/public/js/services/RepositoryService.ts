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
         * returns loaded recipes
         */
        getRecipes():Array<fettyBossy.Data.IRecipe>;
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
         * register user, check if mail or user exists
         * @param user
         */
        registerUser(user:fettyBossy.Data.IUser):ng.IPromise<IRegisterUserResult>;
        /**
         * load all ratings for given recipe
         * @param recipeId
         */
        loadRatings(recipeId:string):ng.IPromise<Array<fettyBossy.Data.IRating>>;
        /**
         * save given ratign
         * @param rating
         */
        saveRating(rating:fettyBossy.Data.IRating):void;

        addListener(callback);
    }

    class Repository implements IRepository {
        static LOAD_ALL_RECIPES_URL:string = '/api/recipe';
        static LOAD_ALL_RECIPES_BY_USER_URL:string = '/api/recipe/byUser/';
        static LOAD_RECIPE_BY_ID:string = '/api/recipe/';
        static SAVE_RECIPE:string = '/api/recipe';

        static LOAD_USER_BY_ID:string = '/api/user/';
        static REGISTER_USER:string = '/api/user/register';

        static LOAD_RATINGS_BY_RECIPE_ID:string = '/api/rating/';
        static SAVE_RATING:string = '/api/rating';

        recipes:Array<fettyBossy.Data.IRecipe> = [];
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

            this.$http.get(Repository.LOAD_ALL_RECIPES_URL).then((data) => {
                this.recipes = <Array<fettyBossy.Data.IRecipe>> data.data;
                this.$log.debug('Repository loadRecipes() - loaded recipes, returning ' + this.recipes.length + ' recipes');
                deferred.resolve(this.recipes);
            });

            return deferred.promise;
        }

        loadRecipesByUser(userId:string):ng.IPromise<Array<fettyBossy.Data.IRecipe>> {
            this.$log.debug("Repository loadRecipesByUser('" + userId + "')");
            var deferred = this.$q.defer();

            this.$http.get(Repository.LOAD_ALL_RECIPES_BY_USER_URL + userId).then((data) => {
                var loadedRecipes = <Array<fettyBossy.Data.IRecipe>>data.data;
                this.updateCacheForRecipes(loadedRecipes);
                this.$log.debug("Repository loadRecipesByUser('" + userId + "') - loaded recipes, returning '" + loadedRecipes.length + "' recipes");
                deferred.resolve(loadedRecipes);
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

                // update local cache
                this.updateCacheForRecipes([recipe]);

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

        saveRecipe(recipe:fettyBossy.Data.IRecipe) {
            this.$log.debug('Repository saveRecipe(' + recipe + ')');
            var deferred = this.$q.defer();

            var response = <fettyBossy.Services.ISaveRecipeResult>{};

            this.$http.post(Repository.SAVE_RECIPE, recipe)
                .success((recipe) => {
                    response.successful = true;
                    response.savedRecipe = <fettyBossy.Data.IRecipe>recipe;

                    // update local cache
                    var recipeArray = <Array<fettyBossy.Data.IRecipe>>[recipe];
                    this.updateCacheForRecipes(recipeArray);

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

        registerUser(user:fettyBossy.Data.IUser):ng.IPromise<IRegisterUserResult> {
            this.$log.debug('Repository registerUser(' + user + ')');
            var deferred = this.$q.defer();

            var response = <fettyBossy.Services.IRegisterUserResult>{};

            this.$http.post(Repository.REGISTER_USER, user)
                .success((data) => {
                    response.successful = true;
                    response.registeredUser = data.registeredUser;
                    deferred.resolve(response);
                }).error((data, status, header, config) => {
                    response.successful = false;
                    if (data && data.message) {
                        response.message = data.message;
                    } else {
                        if (status == 0){
                            response.message = "Server nicht erreichbar"
                        } else {
                            response.message = "Server-Fehler"
                        }
                    }
                    deferred.resolve(response);
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
                var rating = data.data;

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

        /**
         * replace recipe in local cache with given recipe
         * @param loadedRecipes:Array<fettyBossy.Data.IRecipe> the new ones
         */
        private updateCacheForRecipes(loadedRecipes:Array<fettyBossy.Data.IRecipe>) {
            var recipes = this.recipes;
            loadedRecipes.forEach(function (loadedRecipe) {

                // remove recipe with the same id
                recipes.forEach(function (oldRecipe, index) {
                    if (oldRecipe._id === loadedRecipe._id) {
                        recipes.splice(index, 1);
                    }
                });
                // add the new recipe
                recipes.push(loadedRecipe);
            });
            this.notifyListener();
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
