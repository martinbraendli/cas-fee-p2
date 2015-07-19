///<reference path='../../../../typings/tsd.d.ts' />
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
            controller: fettyBossy.Controllers.ViewUserController,
            link: () => {

            }
        };
    }
}
