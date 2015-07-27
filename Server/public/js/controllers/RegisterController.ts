///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class RegisterController {

        public static $inject = ['$log', 'RepositoryService', 'SessionService', '$location'];

        registerError:string;

        constructor(private $log:ng.ILogService,
                    private repository:fettyBossy.Services.IRepository,
                    private SessionService:fettyBossy.Services.ISession,
                    private $location:ng.ILocationService) {
            this.$log.debug('RegisterController constructor');
        }

        register(user:fettyBossy.Data.IUser):boolean {
            this.$log.debug('RegisterController register("' + user + '")');

            var $location = this.$location;
            var sessionService = this.SessionService;
            var registerError = this.registerError;

            this.repository.registerUser(user)
                .then(function (result:fettyBossy.Services.IRegisterUserResult) {
                    if (result.successful) {
                        registerError = null;
                        sessionService.setUser(result.registeredUser);
                        alert("registered user '" + result.registeredUser.name + "'");

                        $location.path("/viewUser/" + result.registeredUser._id);
                    } else {
                        registerError = result.message;
                    }
                });

            return true;
        }
    }

    angular
        .module('fettyBossy')
        .controller('RegisterController', RegisterController);
}