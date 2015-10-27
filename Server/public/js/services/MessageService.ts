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

        public static $inject = [$injects.$log, $injects.$timeout];

        constructor(private $log:ng.ILogService, private $timeout:ng.ITimeoutService) {
            this.$log.debug('Message constructor');

            self = this;
            window.setMessage = this.setMessage;
        }

        setMessage(text:string, severity:number):void {
            if (!text) {
                self.message = null;
                self.$log.debug('Message setMessage(null)');
            } else {
                self.message = <IMessage>{
                    text: text,
                    severity: severity
                };
                self.$log.debug('Message setMessage("' + self.message.text + "/" + self.message.severity + '")');
            }

            var message = self.message;
            self.listener.forEach(function (listener) {
                listener(message);
            });

            // start timer to remove text after certain time
            if (text && text.length > 0) {
                // cancel existing timeout
                if (self.resetTimeout) {
                    self.$timeout.cancel(self.resetTimeout);
                }

                var onTimeout = function () {
                    self.setMessage("");
                };
                self.resetTimeout = self.$timeout(onTimeout, 1800);
            }
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
