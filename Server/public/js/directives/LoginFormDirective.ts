///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module($injects.fettyBossy)
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
