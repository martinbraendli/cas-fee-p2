///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    import IRating = fettyBossy.Data.IRating;
    import IListRecipeRatingsScope = fettyBossy.Directive.IListRecipeRatingsScope;
    import IRepository = fettyBossy.Services.IRepository;
    import ISession = fettyBossy.Services.ISession;
    import ILogService = ng.ILogService;

    export class ListRecipeRatingsController {

        public static $inject = [
            $injects.$log,
            $injects.services.repositoryService,
            $injects.services.sessionService,
            $injects.$scope];

        constructor(private $log:ILogService,
                    private repository:IRepository,
                    private session:ISession,
                    private $scope:IListRecipeRatingsScope) {
            if (!$scope.recipe) {
                return;
            }
            this.$log.debug("ListRecipeRatingsController constructor - loadRatings for recipe '" + $scope.recipe._id + "'");

            this.reloadRatings($scope, repository);

            // register listener
            var reloadRatings = this.reloadRatings;
            var setCurrentRatings = function () {
                reloadRatings($scope, repository);
            };
            this.repository.addListener(setCurrentRatings);
        }

        /**
         * reload ratings from server
         */
        reloadRatings(scope, repository) {
            repository.loadRatings(scope.recipe._id)
                .then(function (loadedRatings) {
                    scope.ratings = loadedRatings;
                });
        }

        /**
         * check if current user has already added a rating
         */
        canCreateRating():boolean {
            var currentUser = this.session.getUser();
            if (currentUser == null) {
                return false;
            }

            if (!this.$scope.ratings || this.$scope.ratings.length == 0) {
                return true;
            }

            var filterByUser = function (rating:IRating) {
                if (rating.userId) {
                    return (rating.userId != currentUser._id);
                }
                // no author on recipe set
                return true;
            };
            var ownRatings = this.$scope.ratings.filter(filterByUser);

            return (ownRatings.length > 0);
        }

        /**
         * returns true if the given rating belongs to the logged in user
         * @param rating:IRating
         */
        isOwnRating(rating:IRating):boolean {
            if (this.session.getUser() == null) {
                return false;
            }
            return (this.session.getUser()._id === rating.userId);
        }
    }

    angular
        .module($injects.fettyBossy)
        .controller($injects.controllers.listRecipeRatingsController, ListRecipeRatingsController);
}