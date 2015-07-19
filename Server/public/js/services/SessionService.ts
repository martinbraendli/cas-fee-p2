///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Services {
    'use strict';


    export interface ISession {
        loadUsers():ng.IPromise<fettyBossy.Data.IUser>;

        /**
         * @param user
         * @returns false if login failed, otherwise true
         */
        setUser(user:fettyBossy.Data.IUser):boolean;
        /**
         * current logged in user
         */
        getUser():fettyBossy.Data.IUser;
        findUser(id:number):fettyBossy.Data.IUser;
        userExists(user:fettyBossy.Data.IUser):boolean;
        emailExists(user:fettyBossy.Data.IUser):boolean;
        passwordMatches(user:fettyBossy.Data.IUser):boolean;
        /**
         * Add user to the database
         */
        register(user:fettyBossy.Data.IUser):fettyBossy.Data.IUser;
    }

    class Session implements ISession {
        user:fettyBossy.Data.IUser[] = null;

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
                this.$http.get('js/data/users.json').then((data) => {
                    this.users = <Array<fettyBossy.Data.IUser>> data.data;
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
                this.$log.info('Session setUser("' + user + '") - = logout');
                this.user = null;
                return;
            }

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
            this.$log.debug('Session getUser()');

            return this.user;
        }

        findUser(id:number):fettyBossy.Data.IUser {
            this.$log.debug('Session findUser("' + id + '")');

            if (this.user && this.user.id === id) {
                this.$log.info('Session findUser("' + id + '") - is current user');
                return this.user;
            }

            // find user
            for (var k in this.users) {
                var u = this.users[k];
                if (u.id === id) {
                    this.$log.info('Session findUser("' + id + '") - found');
                    return u;
                }
            }

            return null;
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

        register(user:fettyBossy.Data.IUser):user {
            user.id = 999; // TODO generate on server
            this.users.push(user);
            return user;
        }
    }

    angular.module('fettyBossy')
        .service('SessionService', Session);
}
