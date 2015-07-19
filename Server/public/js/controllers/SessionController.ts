///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    export class SessionController {

        public static $inject = ['$log', '$location', 'SessionService'];

        loginError:fettyBossy.Controllers.IUserFormValidationResponse;

        constructor(private $log:ng.ILogService,
                    private $location:ng.ILocationService,
                    private sessionService:fettyBossy.Services.ISession) {
            this.$log.debug('SessionController constructor');
        }

        /**
         *
         * @param user
         * @returns false if login failed, otherwise true
         */
        login(user:fettyBossy.Data.IUser):boolean {
            this.$log.debug('SessionController login("' + user + '")');

            this.loginError = <fettyBossy.Data.IFormValidationResponse>{};

            if (!this.sessionService.userExists(user)) {
                this.$log.error('SessionController login("' + user + '") - failed: user unknown');
                this.loginError.message = "Benutzer nicht bekannt";
                this.loginError.nameMessage = "Benutzer nicht bekannt";
                return false;
            }

            if (!this.sessionService.passwordMatches(user)) {
                this.$log.error('SessionController login("' + user + '") - failed: password incorrect');
                this.loginError.message = "Passwort falsch";
                this.loginError.passwordMessage = "Passwort falsch";
                return false;
            }
            // alles ok
            this.$log.info('SessionController login("' + user + '") - successful');
            this.sessionService.setUser(user);
            this.loginError = null;

            this.$location.path('/searchRecipe');

            return true;
        }

        logout() {
            this.sessionService.setUser(null);
        }

        /**
         *
         * @param userId if userId is given return true if userId matches to the logged in user.
         * @returns {boolean}
         */
        isLoggedIn(userId:number):boolean {
            var user = this.sessionService.getUser();
            if (userId && user) {
                return user.id === userId;
            }
            return user != null;
        }

        getUser():fettyBossy.Data.IUser {
            return this.sessionService.getUser();
        }
    }

    angular
        .module('fettyBossy')
        .controller('SessionController', SessionController);
}