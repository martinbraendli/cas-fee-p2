///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Services {
    'use strict';


    export interface ISession {
        loadUsers():ng.IPromise<fettyBossy.Data.IUser>;
        /**
         * Set the given user as logged in.
         *
         * @param user
         */
        setUser(user:fettyBossy.Data.IUser);
        /**
         * returns current logged in user, null if not set.
         */
        getUser():fettyBossy.Data.IUser;
        /**
         * check if given user with same name exists.
         * @param user
         */
        userExists(user:fettyBossy.Data.IUser):boolean;
        /**
         * check if given user with same email adress exists.
         * @param user
         */
        emailExists(user:fettyBossy.Data.IUser):boolean;
        /**
         * find user by name and check if password matches.
         * @param user
         */
        passwordMatches(user:fettyBossy.Data.IUser):boolean;
        /**
         * Add user to the database
         */
        register(user:fettyBossy.Data.IUser):fettyBossy.Data.IUser;
    }

    class Session implements ISession {
        user:fettyBossy.Data.IUser = null;

        // TODO get from server
        users:Array<fettyBossy.Data.IUser>;

        public static $inject = ['$log', '$http', '$q'];

        constructor(private $log:ng.ILogService,
                    private $http:ng.IHttpService,
                    private $q:ng.IQService) {
            this.$log.debug('Session constructor');
        }

        // TODO move to server
        loadUsers():ng.IPromise<fettyBossy.Data.IUser> {
            var deferred = this.$q.defer();

            if (!this.users) {
                this.$http.get('/api/user').then((data) => {
                 //   this.users = <Array<fettyBossy.Data.IUser>> data.data;
                    deferred.resolve(this.users);
                });
            } else {
                deferred.resolve(this.users);
            }
            return deferred.promise;
        }

        setUser(user:fettyBossy.Data.IUser) {
            this.$log.debug('Session setUser("' + user + '")');
            if (user == null) {
                this.$log.info('Session setUser("' + user + '") - logout');
                this.user = null;
                return;
            }

            // TODO do login on server

            for (var k in this.users) {
                var u = this.users[k];
                if (u.name === user.name) {
                    // set user with all properties set
                    this.user = u;
                    return;
                }
            }
            // user not found!
            this.$log.error('Session setUser("' + user + '") - user not found');
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
                // TODO find user by name and check password
                if (u.password === user.password) {
                    return true;
                }
            }
            return false;
        }

        register(user:fettyBossy.Data.IUser):fettyBossy.Data.IUser {
            user._id = "999"; // TODO generate on server

            if (!this.users){
                this.users = [];
            }

            this.users.push(user);
            return user;
        }
    }

    angular.module('fettyBossy')
        .service('SessionService', Session);
}
