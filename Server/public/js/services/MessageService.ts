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
    }

    export interface IMessage {
        text: string;
        severity: number; // see SEVERITY_INFO, SEVERITY_WARN, SEVERITY_ERROR
    }

    class Message implements IMessageService {
        self:IMessageService;

        message:IMessage = null;

        listener = [];

        public static $inject = [$injects.$log, $injects.toastr];

        constructor(private $log:ng.ILogService, private $toastr) {
            this.$log.debug('Message constructor');

            self = this;
            // temp for links on startpage
            window.setMessage = this.setMessage;
        }

        setMessage(text:string, severity:number):void {
            if (!text) {
                self.message = {
                    text: null,
                    severity: null
                };
            } else {
                self.message = <IMessage>{
                    text: text,
                    severity: severity
                };
            }

            switch (self.message.severity) {
                case fettyBossy.Services.SEVERITY_ERROR:
                    self.$log.error(self.message.text);
                    self.$toastr.error(self.message.text);
                    break;
                case fettyBossy.Services.SEVERITY_WARN:
                    self.$log.warn(self.message.text);
                    self.$toastr.warning(self.message.text);
                    break;
                case fettyBossy.Services.SEVERITY_INFO:
                    self.$log.info(self.message.text);
                    self.$toastr.success(self.message.text);
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
