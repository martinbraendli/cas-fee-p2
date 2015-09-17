///<reference path='../_reference.ts' />

/**
 * Service which provides messages for feedback to the user, use it instead of ugly alerts.
 */
module fettyBossy.Services {
    'use strict';


    export interface IMessage {
        /**
         *
         * @param text
         */
        setText(text:string):void;
        /**
         */
        getText():string;
    }

    class Message implements IMessage {
        text:string = "EMPTY";

        public static $inject = ['$log'];

        constructor(private $log:ng.ILogService) {
            this.$log.debug('Message constructor');
        }

        setText(text:string):void {
            this.$log.debug('Message setText("' + text + '")');
            this.text = text;
        }

        getText():string {
            return this.text;
        }
    }

    angular.module('fettyBossy')
        .service('MessageService', Message);
}
