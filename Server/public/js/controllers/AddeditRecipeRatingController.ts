///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class AddeditRecipeRatingController {

        public static $inject = [
            $injects.$log,
            $injects.services.repositoryService,
            $injects.services.sessionService,
            $injects.services.messageService,
            $injects.$scope,
            $injects.$route];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository,
                    private sessionService:fettyBossy.Services.ISession,
                    private messageService:fettyBossy.Services.IMessageService,
                    private $scope:fettyBossy.Directive.IAddeditRecipeRatingScope,
                    private $route:ng.route.IRouteService) {
            this.$log.debug('AddeditRecipeRatingController constructor');
        }

        save() {
            this.$log.debug('AddeditRecipeRatingController save()');

            this.$scope.rating.userId = this.sessionService.getUser()._id;
            this.$scope.rating.userName = this.sessionService.getUser().name;
            this.$scope.rating.recipeId = this.$scope.recipeId;

            var messageService = this.messageService;
            var route = this.$route;

            this.repository.saveRating(this.$scope.rating)
                .then(function (result:fettyBossy.Services.ISaveRatingResult) {
                    if (result.successful) {
                        messageService.setMessage("Bewertung erfolgreich gespeichert", fettyBossy.Services.SEVERITY_INFO, "");
                        route.reload(); // rerender current page
                    } else {
                        messageService.setMessage("Bewertung konnte nicht gespeichert werden", fettyBossy.Services.SEVERITY_ERROR, "");
                    }
                });
        }
    }

    angular
        .module($injects.fettyBossy)
        .controller($injects.controllers.addeditRecipeRatingController, AddeditRecipeRatingController);
}