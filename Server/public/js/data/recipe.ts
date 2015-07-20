///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IRecipe {
        id: number;
        title: string;
        author: fettyBossy.Data.IUser;
        numPerson: number;
        images: Array<fettyBossy.Data.IImage>;
        ingredients: Array<fettyBossy.Data.IIngredient>;
        preparationSteps: Array<fettyBossy.Data.IPreparationStep>;
        bakingTime: number; // in minutes
        preparationTime: number; // in minutes
        ratings: Array<fettyBossy.Data.IRating>;
    }
}