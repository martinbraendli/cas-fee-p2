///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Services {
    'use strict';


    export interface ISession {
        /**
         * Set the given user as logged in.
         *
         * @param user
         */
        setUser(user:fettyBossy.Data.IUser):void;
        /**
         * returns current logged in user, null if not set.
         */
        getUser():fettyBossy.Data.IUser;
    }

    class Session implements ISession {
        user:fettyBossy.Data.IUser = null;

        public static $inject = ['$log'];

        constructor(private $log:ng.ILogService) {
            this.$log.debug('Session constructor');
        }

        setUser(user:fettyBossy.Data.IUser) {
            this.$log.debug('Session setUser("' + user + '")');
            this.user = user;
        }

        getUser():fettyBossy.Data.IUser {
            return this.user;
        }
    }

    angular.module('fettyBossy')
        .service('SessionService', Session);
}
