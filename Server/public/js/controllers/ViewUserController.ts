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
            $injects.services.userService,
            $injects.services.messageService,
            'user',
            'recipes'];

        constructor(private $log:ng.ILogService,
                    private userService:fettyBossy.Services.IUserService,
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

            // check if new password is set
            if (this.passwordNew){
                this.user.password = this.passwordNew;
            } else {
                this.user.password = null;
            }

            this.userService.saveUser(this.user)
                .then(function (result:fettyBossy.Services.IRegisterUserResult) {
                    if (result.successful) {
                        messageService.setMessage("USER_SAVE_OK", fettyBossy.Services.SEVERITY_INFO, "");
                    } else {
                        messageService.setMessage("USER_SAVE_FAILED", fettyBossy.Services.SEVERITY_ERROR, "");
                    }
                });
        }
    }

    angular
        .module('fettyBossy')
        .controller($injects.controllers.viewUserController, ViewUserController);
}