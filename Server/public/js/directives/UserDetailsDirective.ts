///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module('fettyBossy')
        .directive('fbUserDetails', userDetails);

    function userDetails():ng.IDirective {
        return {
            restrict: 'E',
           // scope: {},
            templateUrl: 'js/directives/userDetails.tpl.html',
            controllerAs: 'viewUserCtrl',
            //controller: fettyBossy.Controllers.ViewUserController,
            controller: () => {
// TODO nicht pageController
            },
            link: () => {

            }
        };
    }
}
