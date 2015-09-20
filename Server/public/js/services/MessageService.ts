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

        message:IMessage = null;

        listener = [];

        public static $inject = ['$log'];

        constructor(private $log:ng.ILogService) {
            this.$log.debug('Message constructor');
        }

        setMessage(text:string, severity:number):void {
            this.message = <IMessage>{
                text: text,
                severity: severity
            };
            this.$log.debug('Message setMessage("' + this.message.text + "/" + this.message.severity + '")');

            var message = this.message;
            this.listener.forEach(function (listener) {
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
