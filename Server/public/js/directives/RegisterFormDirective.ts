///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbRegisterForm', registerForm);

    function registerForm():ng.IDirective {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'js/directives/registerForm.tpl.html',
            controllerAs: 'registerCtrl',
            controller: fettyBossy.Controllers.RegisterController,
            link: () => {

            }
        };
    }
}
