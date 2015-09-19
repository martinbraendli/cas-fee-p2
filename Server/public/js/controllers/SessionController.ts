///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Controllers {
    'use strict';

    export class SessionController {
        static SESSION_LOGIN:string = '/api/user/login/';
        static SESSION_LOGOUT:string = '/api/user/logout/';

        public static $inject = ['$log', '$location', 'SessionService', 'MessageService', '$http', '$q'];

        loginError:fettyBossy.Controllers.IUserFormValidationResponse;

        constructor(private $log:ng.ILogService,
                    private $location:ng.ILocationService,
                    private sessionService:fettyBossy.Services.ISession,
                    private messageService:fettyBossy.Services.IMessageService,
                    private $http:ng.IHttpService,
                    private $q:ng.IQService) {
            this.$log.debug('SessionController constructor');
        }

        /**
         *
         * @param user
         * @returns false if login failed, otherwise true
         */
        login(user:fettyBossy.Data.IUser):boolean {
            this.$log.debug('SessionController login("' + user + '")');
            var messageService = this.messageService;

            this.$http.post(SessionController.SESSION_LOGIN, user)
                .success((user) => {
                    // alles ok
                    this.$log.info('SessionController login("' + user + '") - successful');
                    this.sessionService.setUser(user);
                    this.$location.path('/searchRecipe');
                })
                .error((data, status, header, config)=> {
                    messageService.setMessage("Login fehlgeschlagen", fettyBossy.Services.SEVERITY_ERROR);
                });

            return true;
        }

        logout() {
            this.$log.debug('SessionController logout');
            this.$http.get(SessionController.SESSION_LOGOUT + this.sessionService.getUser().name);
            this.sessionService.setUser(null);
            this.$location.path('/');
        }

        /**
         *
         * @param userId if userId is given return true if userId matches to the logged in user.
         * @returns {boolean}
         */
        isLoggedIn(userId:string):boolean {
            if (!userId) {
                return false;
            }
            var user = this.sessionService.getUser();
            if (user) {
                return user._id === userId;
            }
            return false;
        }

        getUser():fettyBossy.Data.IUser {
            return this.sessionService.getUser();
        }
    }

    angular
        .module('fettyBossy')
        .controller('SessionController', SessionController);
}