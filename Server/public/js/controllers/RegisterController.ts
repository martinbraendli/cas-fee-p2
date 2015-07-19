///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Controllers {
    'use strict';

    export interface IFormValidationResponse {
        message: string;
        nameMessage: string;
        emailMessage: string;
        passwordMessage: string;
    }

    export class RegisterController {

        public static $inject = ['$log', 'SessionService'];

        registerError:fettyBossy.Controllers.IFormValidationResponse;

        constructor(private $log:ng.ILogService,
                    private sessionService:fettyBossy.Services.ISession) {
            this.$log.debug('SessionController constructor');
        }

        register(user:fettyBossy.Data.IUser):boolean {
            this.$log.debug('SessionController register("' + user + '")');

            this.registerError = <fettyBossy.Data.IFormValidationResponse>{};

            if (this.sessionService.userExists(user)) {
                this.$log.error('SessionController login("' + user + '") - failed: user already exists');
                this.registerError.message = "Name nicht verfügbar";
                this.registerError.nameMessage = "Name nicht verfügbar";
                return false;
            }

            if (this.sessionService.emailExists(user)) {
                this.$log.error('SessionController login("' + user + '") - failed: user email exists');
                this.registerError.message = "E-Mail bereits registriert";
                this.registerError.nameMessage = "E-Mail bereits registriert";
                return false;
            }

            this.$log.info('SessionController register("' + user + '") - successful');
            this.sessionService.register(user);
            this.registerError = null;
            return true;
        }
    }

    angular
        .module('fettyBossy')
        .controller('RegisterController', RegisterController);
}