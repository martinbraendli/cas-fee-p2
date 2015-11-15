///<reference path='../_reference.ts' />
module fettyBossy.Data {
    'use strict';

    export interface IRecipe {
        _id: string;
        userId: string;
        userName: string;

        title: string; // name of the recipe
        description: string; // recipe description
        category: string; // kind of food
        numPerson: number; // number of person
        bakingTime: number; // in minutes
        preparationTime: number; // in minutes

        images: Array<fettyBossy.Data.IImage>;
        ingredients: Array<IIngredient>;
        preparationSteps: Array<IPreparationStep>;
    }
}