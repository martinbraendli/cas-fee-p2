///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class ViewUserController {

        user:fettyBossy.Data.IUser;
        recipes:Array<fettyBossy.Data.IRecipe>;
        recipeFilter:ISearchRecipeFilter;

        public static $inject = ['$log', 'user'];

        constructor(private $log:ng.ILogService,
                    user:fettyBossy.Data.IUser) {
            this.$log.debug('ViewUserController constructor');
            this.user = user;
            // recipe filter for current user;
            this.recipeFilter = <ISearchRecipeFilter>{
                userId: user._id
            };
        }
    }

    angular
        .module('fettyBossy')
        .controller('ViewUserController', ViewUserController);
}