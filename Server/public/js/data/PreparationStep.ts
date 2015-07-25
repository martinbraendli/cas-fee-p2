///<reference path='../_reference.ts' />

/**
 *
 */
module fettyBossy.Data {
    'use strict';

    export interface IPreparationStep {
        _id: number; // unique id
        position: number; // position of step in recipe
        text: string; // text describing the doing
    }
}