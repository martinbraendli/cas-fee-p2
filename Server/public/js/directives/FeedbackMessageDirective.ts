///<reference path='../_reference.ts' />

/**
 * Directive to show message with text from messageService
 */
module fettyBossy.Directive {
    'use strict';

    interface FeedbackMessageScope extends ng.IScope {
        message:fettyBossy.Services.IMessage;
        getMessageClass(severity:number):string;
    }

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

        link = (scope:FeedbackMessageScope) => {
            this.messageService.addListener(function (msg) {
                scope.message = msg;
            });

            scope.getMessageClass = this.getMessageClass;
        }
    }

    angular
        .module('fettyBossy')
        .directive('fbFeedbackMessage',
        ["MessageService", (MessageService) =>  new FeedbackMessageDirective(MessageService)]);
}
