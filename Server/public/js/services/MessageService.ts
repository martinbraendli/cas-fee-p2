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
         */
        setMessage(text:string, severity:number, details:string):void;
    }

    export interface IMessage {
        text: string;
        severity: number; // see SEVERITY_INFO, SEVERITY_WARN, SEVERITY_ERROR
        details: string;
    }

    class Message implements IMessageService {
        listener = [];

        public static $inject = [$injects.$log, $injects.toastr];

        constructor(private $log:ng.ILogService, private $toastr) {
            this.$log.debug('Message constructor');
        }

        public setMessage(text:string, severity:number, details:string):void {
            var message = <IMessage>{};
            if (!text) {
                message = {
                    text: null,
                    severity: null,
                    details: null
                };
            } else {
                message = <IMessage>{
                    text: text,
                    severity: severity,
                    details: details
                };
            }

            switch (message.severity) {
                case fettyBossy.Services.SEVERITY_ERROR:
                    this.$log.error(message.text + "(" + details + ")");
                    this.$toastr.error(message.text);
                    break;
                case fettyBossy.Services.SEVERITY_WARN:
                    this.$log.warn(message.text + "(" + details + ")");
                    this.$toastr.warning(message.text);
                    break;
                case fettyBossy.Services.SEVERITY_INFO:
                    this.$log.info(message.text + "(" + details + ")");
                    this.$toastr.success(message.text);
                    break;
                default:
                    //noop;
                    break;
            }
        }
    }

    angular.module($injects.fettyBossy)
        .service($injects.services.messageService, Message);
}
