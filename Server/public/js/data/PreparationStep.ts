///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IPreparationStep {
        id: number; // unique id
        position: number; // position of step in recipe
        text: string; // text describing the doing
    }
}