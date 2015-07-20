///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IRating {
        id: number;
        comment: string;
        author: fettyBossy.Data.IUser;
        stars: number; // 1 to 5 stars
    }
}