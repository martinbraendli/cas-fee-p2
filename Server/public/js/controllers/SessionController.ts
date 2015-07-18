///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    export class SessionController {

        public static $inject = ['$log', 'SessionService'];

        constructor(private $log:ng.ILogService,
                    private sessionService:fettyBossy.Services.ISession) {
            this.$log.debug('SessionController constructor');
        }

        logon() {
            var user = <fettyBossy.Data.IUser>{};
            user.id = 2;
            user.name = "while e coyote";

            this.sessionService.setUser(user);
        }

        logout() {
            this.sessionService.setUser(null);
        }

        /**
         *
         * @param userId if userId is given return true if userId matches to the logged in user.
         * @returns {boolean}
         */
        isLoggedIn(userId:number):boolean {
            var user = this.sessionService.getUser();
            if (userId && user) {
                return user.id === userId;
            }
            return user != null;
        }

        getUser():fettyBossy.Data.IUser {
            return this.sessionService.getUser();
        }
    }

    angular
        .module('fettyBossy')
        .controller('SessionController', SessionController);
}