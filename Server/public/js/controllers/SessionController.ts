///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    export class SessionController {

        user:fettyBossy.Data.IUser;

        public static $inject = ['$log'];

        constructor(private $log:ng.ILogService) {
            this.$log.debug('SessionController constructor');

            this.user = null;
        }

        logon() {
            this.user = <fettyBossy.Data.IUser>{};
            this.user.id = 5;
            this.user.name = "while e coyote";
        }

        logout() {
            this.user = null;
        }

        isLoggedIn():boolean {
            return this.user != null;
        }
    }

    angular
        .module('fettyBossy')
        .controller('SessionController', SessionController);
}