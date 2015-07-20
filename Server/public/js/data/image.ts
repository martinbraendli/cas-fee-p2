///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IImage {
        id: number;
        src: string;
        author: fettyBossy.Data.IUser;
    }
}