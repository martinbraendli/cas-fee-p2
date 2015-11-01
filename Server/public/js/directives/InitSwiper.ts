///<reference path='../_reference.ts' />

module fettyBossy.Directive {
    'use strict';

    angular
        .module($injects.fettyBossy)
        .directive('fbInitSwiper', initSwiper);

    function initSwiper(private $timeout:ng.ITimeoutService):ng.IDirective {
        return {
            restrict: 'A',
            link: () => {
                $timeout(function () {
                    new Swiper('.swiper-container', {
                        direction: 'horizontal',
                        loop: false,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev'
                    });
                });
            }
        };
    }
}
