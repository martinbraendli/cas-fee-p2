///<reference path='../_reference.ts' />

/**
 * Service which provides messages for feedback to the user, use it instead of ugly alerts.
 */
module fettyBossy.Services {
    'use strict';

    export var SEVERITY_INFO:number = 0;
    export var SEVERITY_WARN:number = 1;
    export var SEVERITY_ERROR:number = 2;

    /**
     * interface of this service
     */
    export interface IMessageService {
        /**
         *
         * @param text
         * @param severity
         */
        setMessage(text:string, severity:number):void;
        /**
         */
        getMessage():IMessage;

        addListener(callback);
    }

    export interface IMessage {
        text: string;
        severity: number; // see SEVERITY_INFO, SEVERITY_WARN, SEVERITY_ERROR
    }

    class Message implements IMessageService {
        self:IMessageService;

        message:IMessage = null;

        listener = [];

        public static $inject = ['$log'];

        constructor(private $log:ng.ILogService) {
            this.$log.debug('Message constructor');

            self = this;
            window.setMessage = this.setMessage;
        }

        setMessage(text:string, severity:number):void {
            self.message = <IMessage>{
                text: text,
                severity: severity
            };
            self.$log.debug('Message setMessage("' + self.message.text + "/" + self.message.severity + '")');

            var message = self.message;
            self.listener.forEach(function (listener) {
                listener(message);
            });
        }

        getMessage():IMessage {
            return this.message;
        }

        addListener(callback) {
            this.listener.push(callback);
        }
    }

    angular.module('fettyBossy')
        .service('MessageService', Message);
}
