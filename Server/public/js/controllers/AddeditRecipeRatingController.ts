///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class AddeditRecipeRatingController {

        public static $inject = ['$log', 'RepositoryService', 'SessionService', '$scope'];

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository,
                    private sessionService:fettyBossy.Services.ISession,
                    private $scope:fettyBossy.Directive.IAddeditRecipeRatingScope) {
            this.$log.debug('AddeditRecipeRatingController constructor');
        }

        save() {
            this.$log.debug('AddeditRecipeRatingController save()');

            this.$scope.rating.userId = this.sessionService.getUser()._id;
            this.$scope.rating.recipeId = this.$scope.recipeId;

            this.repository.saveRating(this.$scope.rating)
                .then(function (result:fettyBossy.Services.ISaveRatingResult) {
                    if (result.successful) {
                        alert("Save ok");
                      // todo event bus for ping listRecipeRatingsController to reload its data -->reload auslösen!
                    } else {
                        alert("Save failed");
                    }
                });
        }
    }

    angular
        .module('fettyBossy')
        .controller('AddeditRecipeRatingController', AddeditRecipeRatingController);
}