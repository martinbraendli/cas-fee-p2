///<reference path='../_reference.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IRating {
        _id: string;
        recipeId: string;
        userId: string;
        userName: string; // TODO lookup in user.db instead of saving it into rating.db

        comment: string;
        stars: number; // 1 to 5 stars
    }
}