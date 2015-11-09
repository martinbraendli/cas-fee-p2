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

        public static $inject = [$injects.$log,
            $injects.services.repositoryService,
            $injects.services.messageService,
            'user',
            'recipes'];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository,
                    private messageService:fettyBossy.Services.IMessageService,
                    user:fettyBossy.Data.IUser,
                    recipes:Array<fettyBossy.Data.IRecipe>) {
            this.$log.debug('ViewUserController constructor');
            this.user = user;
            this.recipes = recipes;
            // recipe filter for current user;
            this.recipeFilter = <ISearchRecipeFilter>{
                userId: user._id
            };
        }

        save():void {
            this.$log.debug('ViewUserController save');

            var messageService = this.messageService;

            this.repository.saveUser(this.user)
                .then(function (result:fettyBossy.Services.IRegisterUserResult) {
                    if (result.successful) {
                        messageService.setMessage("Erfolgreich gespeichert", fettyBossy.Services.SEVERITY_INFO);
                    } else {
                        messageService.setMessage("Speichern fehlgeschlagen", fettyBossy.Services.SEVERITY_ERROR);
                    }
                });
        }
    }

    angular
        .module('fettyBossy')
        .controller($injects.controllers.viewUserController, ViewUserController);
}