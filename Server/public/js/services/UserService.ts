///<reference path='../_reference.ts' />

module fettyBossy.Services {
    'use strict';
    import IUser = fettyBossy.Data.IUser;

    export interface IUserService {
        /**
         * load one user from server by id
         * @param userId
         */
        loadUser(userId:string):ng.IPromise<fettyBossy.Data.IUser>;
        /**
         * register user, check if mail or user exists
         * @param user
         */
        registerUser(user:fettyBossy.Data.IUser):ng.IPromise<IRegisterUserResult>;
        /**
         * save user
         */
        saveUser(user:fettyBossy.Data.IUser):ng.IPromise<IRegisterUserResult>;
    }

    class UserService implements IUserService {
        static LOAD_USER_BY_ID:string = '/api/users/';
        static REGISTER_USER:string = '/api/users/register';
        static SAVE_USER:string = '/api/users/save';

        public static $inject = ['$log', '$http', '$q'];

        constructor(private $log:ng.ILogService,
                    private $http:ng.IHttpService,
                    private $q:ng.IQService){
            this.$log.debug('UserService constructor');
        }


        loadUser(userId:string):angular.IPromise<fettyBossy.Data.IUser> {
            this.$log.debug('UserService loadUser(' + userId + ')');
            var deferred = this.$q.defer();

            this.$http.get(UserService.LOAD_USER_BY_ID + userId).then((data) => {
                var user:fettyBossy.Data.IUser;
                user = <fettyBossy.Data.IUser>(data.data);
                this.$log.debug('UserService loadUser(' + userId + ') - loaded user');
                deferred.resolve(user);
            });

            return deferred.promise;
        }

        registerUser(user:fettyBossy.Data.IUser):angular.IPromise<fettyBossy.Services.IRegisterUserResult> {
            this.$log.debug('UserService registerUser(' + user + ')');
            var deferred = this.$q.defer();

            var response = <fettyBossy.Services.IRegisterUserResult>{};

            this.$http.post(UserService.REGISTER_USER, user)
                .success((data) => {
                    response.successful = true;
                    response.registeredUser = <IUser>data.registeredUser;
                    deferred.resolve(response);
                })
                // Fehler beim Request
                .error((data, status, header, config) => {
                    response.successful = false;
                    if (data && data.message) {
                        response.message = data.message;
                    } else {
                        if (status == 0) {
                            response.message = "Server nicht erreichbar"
                        } else {
                            response.message = "Server-Fehler"
                        }
                    }
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        saveUser(user:fettyBossy.Data.IUser):angular.IPromise<fettyBossy.Services.IRegisterUserResult> {
            this.$log.debug('UserService saveUser(' + user + ')');

            var response = <fettyBossy.Services.IRegisterUserResult>{};

            var deferred = this.$q.defer();
            this.$http.post(UserService.SAVE_USER, user)
                .success((data) => {
                    response.successful = true;
                    response.registeredUser = data.registeredUser;
                    deferred.resolve(response);
                })
                // Fehler
                .error((data, status, header, config) => {
                    response.successful = false;
                    if (data && data.message) {
                        response.message = data.message;
                    } else {
                        if (status == 0) {
                            response.message = "Server nicht erreichbar"
                        } else {
                            response.message = "Server-Fehler"
                        }
                    }
                    deferred.resolve(response);
                });

            return deferred.promise;
        }
    }

    angular.module($injects.fettyBossy)
        .service($injects.services.userService, UserService);
}