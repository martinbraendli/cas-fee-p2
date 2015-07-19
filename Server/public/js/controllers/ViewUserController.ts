///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    interface IUserViewRouteParams extends ng.route.IRouteParamsService {
        userId: number;
    }

    export class ViewUserController {

        user:fettyBossy.Data.IUser;

        public static $inject = ['$log', '$routeParams', 'SessionService'];

        constructor(private $log:ng.ILogService,
                    $routeParams:IUserViewRouteParams,
                    private session:fettyBossy.Services.ISession) {
            this.$log.debug('ViewRecipeController constructor');

            this.user = session.findUser(parseInt($routeParams.userId));
        }
    }

    angular
        .module('fettyBossy')
        .controller('ViewUserController', ViewUserController);
}