///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    import IRepository = fettyBossy.Services.IRepository;
    'use strict';
    import IRating = fettyBossy.Data.IRating;
    import IRecipe = fettyBossy.Data.IRecipe;

    export class ViewRecipeController {

        recipe:IRecipe;
        ratings:IRating[];

        public static $inject = [
            $injects.$log,
            $injects.$location,
            $injects.services.messageService,
            $injects.services.repositoryService,
            'recipe',
            'ratings'];

        constructor(private $log:ng.ILogService,
                    private $location:ng.ILocationService,
                    private messageService:fettyBossy.Services.IMessageService,
                    private $repository:IRepository,
                    recipe:fettyBossy.Data.IRecipe,
                    ratings:Array<IRating>) {
            this.$log.debug('ViewRecipeController constructor');
            this.recipe = recipe;
            this.ratings = ratings;
        }

        deleteRecipe() {
            var $location = this.$location;
            var messageService = this.messageService;

            this.$repository.deleteRecipe(this.recipe._id).then(
                // success
                (result:fettyBossy.Services.ISaveRecipeResult) => {
                    messageService.setMessage("RECIPE_DELETE_OK", fettyBossy.Services.SEVERITY_INFO, "");
                    $location.path("/viewUser/" + this.recipe.userId);
                },
                // error
                () => {
                    messageService.setMessage("RECIPE_DELETE_FAILED", fettyBossy.Services.SEVERITY_ERROR, "");
                });
        }
    }

    angular
        .module($injects.fettyBossy)
        .controller($injects.controllers.viewRecipeController, ViewRecipeController);
}