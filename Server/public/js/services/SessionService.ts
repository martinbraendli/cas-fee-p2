///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Services {
    'use strict';


    export interface ISession {
        setUser(user:fettyBossy.Data.IUser);
        getUser():fettyBossy.Data.IUser;
    }

    class Session {
        user:fettyBossy.Data.IUser[] = null;

        constructor(private $log:ng.ILogService) {
            this.$log.debug('Session constructor');
        }

        setUser(user:fettyBossy.Data.IUser) {
            this.user = user;
        }

        getUser():fettyBossy.Data.IUser {
            return this.user;
        }
    }

    angular.module('fettyBossy')
        .service('SessionService', Session);
}
