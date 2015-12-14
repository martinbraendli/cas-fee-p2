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

        startMessage(text:string):void;
    }

    export interface IMessage {
        text: string;
        severity: number; // see SEVERITY_INFO, SEVERITY_WARN, SEVERITY_ERROR
        details: string;
    }

    class Message implements IMessageService {
        listener = [];

        public static $inject = [$injects.$log,
            $injects.toastr,
            $injects.$translate];

        constructor(private $log:ng.ILogService,
                    private $toastr,
                    private $translate) {
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

            var $log = this.$log;
            var $toastr = this.$toastr;

            this.$translate(message.text).then(function (text) {
                switch (message.severity) {
                    case fettyBossy.Services.SEVERITY_ERROR:
                        $log.error(message.text + "(" + details + ")");
                        $toastr.error(text);
                        break;
                    case fettyBossy.Services.SEVERITY_WARN:
                        $log.warn(message.text + "(" + details + ")");
                        $toastr.warning(text);
                        break;
                    case fettyBossy.Services.SEVERITY_INFO:
                        $log.info(message.text + "(" + details + ")");
                        $toastr.success(text);
                        break;
                    default:
                        //noop;
                        break;
                }
            });
        }

        public startMessage(text:string):void {
            var $toastr = this.$toastr;
            this.$translate(text).then(function (text) {
                $toastr.info(text, {
                    "progressBar": true,
                    "timeOut": "3000"
                });
            });
        }
    }

    angular.module($injects.fettyBossy)
        .service($injects.services.messageService, Message);

    angular.module($injects.fettyBossy)
        .config(function (toastrConfig) {
            angular.extend(toastrConfig, {
                target: '#toast-container'
            });
        });
}
