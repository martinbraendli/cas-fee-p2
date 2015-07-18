///<reference path='../../../../typings/tsd.d.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IRecipe {
        id: number;
        title: string;
        author: fettyBossy.Data.IUser;
        numPerson: number;
        images: any; // TODO images
        ingredients: any;
        preparationSteps: any;
        bakingTime: number; // in minutes
        preparationTime: number; // in minutes
    }
}