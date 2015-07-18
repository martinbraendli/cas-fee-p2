///<reference path='../../../typings/tsd.d.ts' />
module fettyBossy {
    'use strict';

    angular.module('fettyBossy')
        .config(config);

    function config($routeProvider:ng.route.IRouteProvider) {
        $routeProvider
            .when("/viewRecipe", {
                templateUrl: 'views/viewRecipe.tpl.html'
            })

            .when("/editRecipe", {
                templateUrl: 'views/editRecipe.tpl.html'
            })

            .when("/searchRecipe", {
                templateUrl: 'views/searchRecipe.tpl.html',
                controller: 'SearchResultlistController',
                controllerAs: 'searchResultlistCtrl'
            })
        ;
    }
}