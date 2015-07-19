///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbLoginForm', loginForm);

    function loginForm():ng.IDirective {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'js/directives/loginForm.tpl.html',
            controllerAs: 'sessionCtrl',
            controller: fettyBossy.Controllers.SessionController,
            link: () => {

            }
        };
    }
}
