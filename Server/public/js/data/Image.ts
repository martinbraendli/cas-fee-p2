///<reference path='../_reference.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IImage {
        _id: string;
        userId: string;

        src: string;
        position: number; // default image will be displayed in search result list
    }
}