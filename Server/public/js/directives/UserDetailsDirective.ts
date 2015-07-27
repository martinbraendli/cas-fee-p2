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
            scope: {
                user: '=user'
            },
            templateUrl: 'js/directives/userDetails.tpl.html',
        };
    }
}
