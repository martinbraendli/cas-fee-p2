///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Services {
    'use strict';

    export function MinutesToHoursMinutesFilter() {
        return function (inputMinutes:number):string {
            if (isNaN(inputMinutes)) {
                return "-";
            }
            var hours:number = Math.floor(inputMinutes / 60);
            var minutes:number = inputMinutes % 60;

            if (hours > 0) {
                return hours + ":" + minutes;
            }
            return "00:" + minutes;
        };
    }

    angular.module($injects.fettyBossy)
        .filter($injects.filter.minutesToHoursMinutes, MinutesToHoursMinutesFilter);
}
