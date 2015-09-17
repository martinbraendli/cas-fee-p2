///<reference path='../_reference.ts' />

/**
 * Directive to show message with text from messageService
 */
module fettyBossy.Directive {
    'use strict';

    class FeedbackMessageDirective implements ng.IDirective {
        restrict = 'E';
        templateUrl = 'js/directives/feedbackMessage.tpl.html';
        messageService;

        constructor(messageService:fettyBossy.Services.IMessageService) {
            this.messageService = messageService;
        }

        link = (scope) => {
            // bind messageService into scope to have access from template
            scope.messageService = this.messageService;
        }
    }

    angular
        .module('fettyBossy')
        .directive('fbFeedbackMessage',
        ["MessageService", (MessageService) =>  new FeedbackMessageDirective(MessageService)]);
}
