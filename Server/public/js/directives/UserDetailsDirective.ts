///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Directive {
    'use strict';

    angular
        .module($injects.fettyBossy)
        .directive('fbUserDetails', userDetails);

    function userDetails():ng.IDirective {
        return {
            restrict: 'E',
            scope: {
                user: '=user',
                save: '=save'
            },
            templateUrl: 'js/directives/userDetails.tpl.html',
            link: ($scope) => {
                $scope.$log = $scope.$parent.viewUserCtrl.$log;
                $scope.messageService = $scope.$parent.viewUserCtrl.messageService;
                $scope.repository = $scope.$parent.viewUserCtrl.repository;
            }
        };
    }
}
