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

        public static $inject = ['$log', 'RepositoryService', 'SessionService', '$scope'];

        constructor(private $log:ILogService,
                    private repository:IRepository,
                    private session:ISession,
                    private $scope:IListRecipeRatingsScope) {
            this.$log.debug("ListRecipeRatingsController constructor - loadRatings for recipe '" + $scope.recipe._id + "'");

            this.reloadRatings();
        }

        /**
         * reload ratings from server
         */
        reloadRatings() {
            var scope = this.$scope;
            this.repository.loadRatings(this.$scope.recipe._id)
                .then(function (loadedRatings) {
                    scope.ratings = loadedRatings;
                });
        }

        /**
         * check if current user has already added a rating
         */
        hasOwnRating():boolean {
            var currentUser = this.session.getUser();
            if (currentUser == null) {
                return false;
            }

            if (!this.$scope.ratings || this.$scope.ratings.length == 0) {
                return false;
            }

            var filterByUser = function (rating:IRating) {
                if (rating.userId) {
                    return (rating.userId === currentUser._id);
                }
                // no author on recipe set
                return false;
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
        .module('fettyBossy')
        .controller('ListRecipeRatingsController', ListRecipeRatingsController);
}