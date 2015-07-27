///<reference path='../_reference.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IIngredient {
        _id: string;
        recipeId: string;

        name: string;
        denomination: string;
    }
}