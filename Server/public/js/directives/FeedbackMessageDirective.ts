///<reference path='../_reference.ts' />

/**
 * Directive to show message with text from messageService
 */
module fettyBossy.Directive {
    'use strict';

    class FeedbackMessageDirective implements ng.IDirective {
        restrict = 'E';
        templateUrl = 'js/directives/feedbackMessage.tpl.html';
        messageService:fettyBossy.Services.IMessageService;

        constructor(messageService:fettyBossy.Services.IMessageService) {
            this.messageService = messageService;
        }

        getMessageClass = function (severity:number) {
            switch (severity) {
                case fettyBossy.Services.SEVERITY_WARN:
                    return "warn";
                case fettyBossy.Services.SEVERITY_ERROR:
                    return "error";
                case fettyBossy.Services.SEVERITY_INFO:
                default:
                    return "info";
            }
        };

        link = (scope) => {
            // bind messageService into scope to have access from template
            scope.messageService = this.messageService;

            scope.getMessageClass = this.getMessageClass;
        }
    }

    angular
        .module('fettyBossy')
        .directive('fbFeedbackMessage',
        ["MessageService", (MessageService) =>  new FeedbackMessageDirective(MessageService)]);
}
