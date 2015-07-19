///<reference path='../../../typings/tsd.d.ts' />
module fettyBossy {
    'use strict';

    angular.module('fettyBossy')
        .config(config);

    function config($routeProvider:ng.route.IRouteProvider) {
        $routeProvider
        /**
         * Detailview of one recipe
         */
            .when("/viewRecipe/:recipeId", {
                templateUrl: 'views/viewRecipe.tpl.html',
                controller: 'ViewRecipeController',
                controllerAs: 'viewRecipeCtrl',
            })

        /**
         * Editview of one recipe
         */
            .when("/editRecipe", {
                templateUrl: 'views/editRecipe.tpl.html'
            })

        /**
         * Searchview
         */
            .when("/searchRecipe", {
                templateUrl: 'views/searchRecipe.tpl.html',
                controller: 'SearchResultlistController',
                controllerAs: 'searchResultlistCtrl'
            })

        /**
         * user detail view
         */
            .when("/viewUser/:userId", {
                templateUrl: 'views/viewUser.tpl.html',
                controller: 'ViewUserController',
                controllerAs: 'viewUserCtrl',
                resolve: {
                    // TODO obsolete when server runs..
                    'Something': ['SessionService', function (SessionService:fettyBossy.Services.ISession) {
                        return SessionService.loadUsers();
                    }]
                }
            })

        /**
         * Default: Startpage with login/register form
         */
            .otherwise({
                templateUrl: 'views/start.tpl.html',
                controller: 'SessionController',
                controllerAs: 'sessionCtrl',
                resolve: {
                    // TODO obsolete when server runs..
                    'Something': ['SessionService', function (SessionService:fettyBossy.Services.ISession) {
                        return SessionService.loadUsers();
                    }]
                }
            });
    }
}