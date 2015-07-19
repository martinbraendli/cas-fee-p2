///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Services {
    'use strict';


    export interface ISession {
        /**
         * @param user
         * @returns false if login failed, otherwise true
         */
        setUser(user:fettyBossy.Data.IUser):boolean;
        getUser():fettyBossy.Data.IUser;
        userExists(user:fettyBossy.Data.IUser):boolean;
        emailExists(user:fettyBossy.Data.IUser):boolean;
        passwordMatches(user:fettyBossy.Data.IUser):boolean;
        /**
         * Add user to the database
         */
        register(user:fettyBossy.Data.IUser):boolean;
    }

    class Session {
        user:fettyBossy.Data.IUser[] = null;

        // TODO get from server
        users:Array<fettyBossy.Data.IUser> = [];

        constructor(private $log:ng.ILogService) {
            this.$log.debug('Session constructor');


            var user:fettyBossy.Data.IUser = {};
            user.id = 0;
            user.name = "user1";
            user.password = "111";
            this.users.push(user);

            var user:fettyBossy.Data.IUser = {};
            user.id = 0;
            user.name = "user2";
            user.password = "222";
            this.users.push(user);
        }

        setUser(user:fettyBossy.Data.IUser) {
            this.user = user;
        }

        getUser():fettyBossy.Data.IUser {
            return this.user;
        }

        userExists(user:fettyBossy.Data.IUser):boolean {
            // TODO mit filter?
            for (var k in this.users) {
                var u = this.users[k];
                if (u.name === user.name) {
                    return true;
                }
            }
            return false;
        }

        emailExists(user:fettyBossy.Data.IUser):boolean {
            // TODO mit filter?
            for (var k in this.users) {
                var u = this.users[k];
                if (u.email === user.email) {
                    return true;
                }
            }
            return false;
        }

        passwordMatches(user:fettyBossy.Data.IUser):boolean {
            // TODO mit filter?
            for (var k in this.users) {
                var u = this.users[k];
                if (u.password === user.password) {
                    return true;
                }
            }
            return false;
        }

        register(user:fettyBossy.Data.IUser):boolean {
            this.users.push(user);
            return true;
        }
    }

    angular.module('fettyBossy')
        .service('SessionService', Session);
}
