///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class AddeditRecipeRatingController {

        public static $inject = ['$log', 'RepositoryService', 'SessionService', 'MessageService', '$scope'];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository,
                    private sessionService:fettyBossy.Services.ISession,
                    private messageService:fettyBossy.Services.IMessage,
                    private $scope:fettyBossy.Directive.IAddeditRecipeRatingScope) {
            this.$log.debug('AddeditRecipeRatingController constructor');
        }

        save() {
            this.$log.debug('AddeditRecipeRatingController save()');

            this.$scope.rating.userId = this.sessionService.getUser()._id;
            this.$scope.rating.recipeId = this.$scope.recipeId;

            var messageService = this.messageService;

            this.repository.saveRating(this.$scope.rating)
                .then(function (result:fettyBossy.Services.ISaveRatingResult) {
                    if (result.successful) {
                        messageService.setText("Bewertung erfolgreich gespeichert");
                      // todo event bus for ping listRecipeRatingsController to reload its data -->reload auslösen!
                    } else {
                        messageService.setText("Bewertung konnte nicht gespeichert werden");
                    }
                });
        }
    }

    angular
        .module('fettyBossy')
        .controller('AddeditRecipeRatingController', AddeditRecipeRatingController);
}