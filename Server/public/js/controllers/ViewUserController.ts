///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class ViewUserController {

        user:fettyBossy.Data.IUser;

        public static $inject = ['$log', 'user'];

        constructor(private $log:ng.ILogService,
                    user:fettyBossy.Data.IUser) {
            this.$log.debug('ViewUserController constructor');
            this.user = user;
        }
    }

    angular
        .module('fettyBossy')
        .controller('ViewUserController', ViewUserController);
}