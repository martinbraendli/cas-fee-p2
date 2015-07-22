///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IImage {
        id: number;
        src: string;
        position: number; // default image will be displayed in search result list
        author: fettyBossy.Data.IUser;
    }
}