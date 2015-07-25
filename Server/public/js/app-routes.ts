///<reference path='_reference.ts' />

/**
 * app-routes
 */
module fettyBossy {
    'use strict';

    angular.module('fettyBossy')
        .config(config);

    interface IRecipeViewRouteParams extends ng.route.IRouteParamsService {
        recipeId: string;
    }

    function config($routeProvider:ng.route.IRouteProvider) {
        $routeProvider
        /**
         * Detailview of one recipe
         * @param recipeId ID of recipe
         */
            .when("/viewRecipe/:recipeId", {
                templateUrl: 'views/viewRecipe.tpl.html',
                controller: 'ViewRecipeController',
                controllerAs: 'viewRecipeCtrl',
                resolve: {
                    recipe: ['RepositoryService', '$route', '$log',
                        function (RepositoryService:fettyBossy.Services.IRepository,
                                  $route:ng.route.IRouteService,
                                  $log:ng.ILogService) {
                            $log.debug("app-routes: resolve for '/viewRecipe/:recipeId' params '" + $route.current.params.recipeId + "'");
                            return RepositoryService.loadRecipe($route.current.params.recipeId);
                        }]
                }
            })

        /**
         * Edit recipe by its id
         * @param recipeId ID of recipe
         */
            .when("/editRecipe/:recipeId", {
                templateUrl: 'views/addeditRecipe.tpl.html',
                controller: 'AddeditRecipeController',
                controllerAs: 'addeditRecipeCtrl',
                resolve: {
                    recipe: ['RepositoryService', '$route', '$log',
                        function (RepositoryService:fettyBossy.Services.IRepository,
                                  $route:ng.route.IRouteService,
                                  $log:ng.ILogService) {
                            $log.debug("app-routes: resolve for '/editRecipe/:recipeId' params '" + $route.current.params.recipeId + "'");
                            return RepositoryService.loadRecipe($route.current.params.recipeId);
                        }]
                }
            })

        /**
         * Add new recipe
         */
            .when("/addRecipe", {
                scope: {
                    addRecipe: true
                },
                templateUrl: 'views/addeditRecipe.tpl.html',
                controller: 'AddeditRecipeController',
                controllerAs: 'addeditRecipeCtrl',
                resolve: {
                    recipe: ['SessionService', '$log', '$location',
                        function (SessionService:fettyBossy.Services.ISession,
                                  $log:ng.ILogService,
                                  $location:ng.ILocationService) {
                            $log.debug("app-routes: resolve for '/addRecipe' params");

                            //if (!SessionService.getUser()) {
                            //    // not logged in, redirect to login
                            //    $location.path("/login");
                            //    // TODO messaging?
                            //    alert("Not logged in!");
                            //    return;
                            //}

                            return {
                   //             userId: SessionService.getUser()._id
                            };
                        }]
                }
            })

        /**
         * Searchview
         */
            .when("/searchRecipe", {
                templateUrl: 'views/searchRecipe.tpl.html',
                controller: 'SearchRecipeController',
                controllerAs: 'searchRecipeCtrl',
                resolve: {
                    recipes: ['RepositoryService', '$log',
                        function (RepositoryService:fettyBossy.Services.IRepository,
                                  $log:ng.ILogService) {
                            $log.debug("app-routes: resolve for '/searchRecipe'");
                            return RepositoryService.loadRecipes();
                        }]
                }
            })

        /**
         * user detail view
         * @param userId ID of the user
         */
            .when("/viewUser/:userId", {
                templateUrl: 'views/viewUser.tpl.html',
                controller: 'ViewUserController',
                controllerAs: 'viewUserCtrl',
                resolve: {
                    user: ['RepositoryService', '$route', '$log',
                        function (RepositoryService:fettyBossy.Services.IRepository,
                                  $route:ng.route.IRouteService,
                                  $log:ng.ILogService) {
                            $log.debug("app-routes: resolve for '/viewUser/:userId' params '" + $route.current.params.userId + "'");
                            return RepositoryService.loadUser($route.current.params.userId);
                        }]
                }
            })

        /**
         * Default: Startpage with login/register form
         */
            .otherwise({
                templateUrl: 'views/start.tpl.html',
                controller: 'SessionController',
                controllerAs: 'sessionCtrl'
            });
    }
}