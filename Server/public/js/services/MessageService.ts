///<reference path='../_reference.ts' />

/**
 * Service which provides messages for feedback to the user, use it instead of ugly alerts.
 */
module fettyBossy.Services {
    'use strict';

    export const SEVERITY_INFO:number = 0;
    export const SEVERITY_WARN:number = 1;
    export const SEVERITY_ERROR:number = 2;

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
    }

    export interface IMessage {
        text: string;
        severity: number; // see SEVERITY_INFO, SEVERITY_WARN, SEVERITY_ERROR
    }

    class Message implements IMessageService {

        message:IMessage = <IMessage>{
            text: "EMPTY"
            , severity: SEVERITY_INFO
        };

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
        }

        getMessage():IMessage {
            return this.message;
        }
    }

    angular.module('fettyBossy')
        .service('MessageService', Message);
}
