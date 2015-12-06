///<reference path='_reference.ts' />

/**
 * app-routes
 */
module fettyBossy {
    'use strict';
    import IMessageService = fettyBossy.Services.IMessageService;
    import IRepository = fettyBossy.Services.IRepository;
    import ISession = fettyBossy.Services.ISession;
    import IUserService = fettyBossy.Services.IUserService;

    angular.module($injects.fettyBossy)
        .config(config);

    function config($routeProvider:ng.route.IRouteProvider) {
        $routeProvider
        /**
         * Detailview of one recipe
         * @param recipeId ID of recipe
         */
            .when("/viewRecipe/:recipeId", {
                templateUrl: 'views/viewRecipe.tpl.html',
                controller: $injects.controllers.viewRecipeController,
                controllerAs: 'viewRecipeCtrl',
                resolve: {
                    recipe: [$injects.services.repositoryService,
                        $injects.services.messageService,
                        $injects.$route,
                        $injects.$log,
                        $injects.$location,
                        function (RepositoryService:IRepository,
                                  MessageService:IMessageService,
                                  $route:ng.route.IRouteService,
                                  $log:ng.ILogService,
                                  $location:ng.ILocationService) {
                            $log.debug("app-routes: resolve for '/viewRecipe/:recipeId' params '" + $route.current.params.recipeId + "'");
                            return RepositoryService.loadRecipe($route.current.params.recipeId).then(
                                // success
                                (data) => {
                                    return data;
                                },
                                // error, show error
                                (error) => {
                                    MessageService.setMessage("ERROR_LOAD_RECIPE",
                                        fettyBossy.Services.SEVERITY_ERROR,
                                        error.status + " " + error.statusText);
                                    $location.path("/searchRecipe");
                                }
                            );
                        }],
                    ratings: [$injects.services.repositoryService,
                        $injects.services.messageService,
                        $injects.$route,
                        $injects.$log,
                        $injects.$location,
                        function (RepositoryService:IRepository,
                                  MessageService:IMessageService,
                                  $route:ng.route.IRouteService,
                                  $log:ng.ILogService,
                                  $location:ng.ILocationService) {
                            $log.debug("app-routes: resolve for '/viewRecipe/:recipeId' params '" + $route.current.params.recipeId + "'");
                            return RepositoryService.loadRatings($route.current.params.recipeId).then(
                                // success
                                (data) => {
                                    return data;
                                },
                                // error, show error
                                (error) => {
                                    MessageService.setMessage("ERROR_LOAD_RATING",
                                        fettyBossy.Services.SEVERITY_ERROR,
                                        error.status + " " + error.statusText);
                                    $location.path("/searchRecipe");
                                }
                            );
                        }]
                }
            })

            /**
             * Edit recipe by its id
             * @param recipeId ID of recipe
             */
            .when("/editRecipe/:recipeId", {
                templateUrl: 'views/addeditRecipe.tpl.html',
                controller: $injects.controllers.addeditRecipeController,
                controllerAs: 'addeditRecipeCtrl',
                resolve: {
                    recipe: [$injects.services.repositoryService,
                        $injects.$route,
                        $injects.$log,
                        function (RepositoryService:IRepository,
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
                controller: $injects.controllers.addeditRecipeController,
                controllerAs: 'addeditRecipeCtrl',
                resolve: {
                    recipe: [$injects.services.sessionService,
                        $injects.services.messageService,
                        $injects.$log,
                        $injects.$location,
                        function (SessionService:ISession,
                                  MessageService:IMessageService,
                                  $log:ng.ILogService,
                                  $location:ng.ILocationService) {
                            $log.debug("app-routes: resolve for '/addRecipe' params");

                            if (!SessionService.getUser()) {
                                MessageService.setMessage("ERROR_NOT_LOGGED_IN", fettyBossy.Services.SEVERITY_WARN, "");
                                // not logged in, redirect to login
                                $location.path("/");
                                return;
                            }
                            // return new recipe with user set
                            return {
                                userId: SessionService.getUser()._id,
                                userName: SessionService.getUser().name
                            };
                        }]
                }
            })

            /**
             * Searchview
             */
            .when("/searchRecipe", {
                templateUrl: 'views/searchRecipe.tpl.html',
                controller: $injects.controllers.searchRecipeController,
                controllerAs: 'searchRecipeCtrl',
                resolve: {
                    recipes: [$injects.services.repositoryService,
                        $injects.services.messageService,
                        $injects.$log,
                        function (RepositoryService:fettyBossy.Services.IRepository,
                                  MessageService:IMessageService,
                                  $log:ng.ILogService) {
                            $log.debug("app-routes: resolve for '/searchRecipe'");
                            return RepositoryService.loadRecipes().then(
                                // success
                                (data) => {
                                    return data;
                                },
                                // error, show error
                                (error) => {
                                    MessageService.setMessage("ERROR_LOAD_RECIPES",
                                        fettyBossy.Services.SEVERITY_ERROR,
                                        error.status + " " + error.statusText);
                                }
                            );
                        }]
                }
            })

            /**
             * user detail view
             * @param userId ID of the user
             */
            .when("/viewUser/:userId", {
                templateUrl: 'views/viewUser.tpl.html',
                controller: $injects.controllers.viewUserController,
                controllerAs: 'viewUserCtrl',
                resolve: {
                    user: [$injects.services.userService,
                        $injects.$route,
                        $injects.$log,
                        function (userService:IUserService,
                                  $route:ng.route.IRouteService,
                                  $log:ng.ILogService) {
                            $log.debug("app-routes: resolve 'user' for '/viewUser/:userId' params '" + $route.current.params.userId + "'");
                            return userService.loadUser($route.current.params.userId);
                        }],
                    recipes: [$injects.services.repositoryService,
                        $injects.services.messageService,
                        $injects.$route,
                        $injects.$log,
                        function (RepositoryService:IRepository,
                                  MessageService:IMessageService,
                                  $route:ng.route.IRouteService,
                                  $log:ng.ILogService) {
                            $log.debug("app-routes: resolve 'recipes' for '/viewUser/:userId' params '" + $route.current.params.userId + "'");
                            return RepositoryService.loadRecipesByUser($route.current.params.userId).then(
                                // success
                                (data) => {
                                    return data;
                                },
                                // error, show error
                                (error) => {
                                    MessageService.setMessage("ERROR_LOAD_RECIPES",
                                        fettyBossy.Services.SEVERITY_ERROR,
                                        error.status + " " + error.statusText);
                                }
                            );
                        }]
                }
            })

            /**
             * Default: Startpage with login/register form
             */
            .otherwise({
                templateUrl: 'views/start.tpl.html',
                controller: $injects.controllers.sessionController,
                controllerAs: 'sessionCtrl'
            });
    }
}