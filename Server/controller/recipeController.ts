///<reference path='../_reference.ts' />

/**
 * recipeController
 */

var recipeStore = require('../services/recipeStore.js');

/**
 *
 * @param req
 * @param res
 */
function publicGetAll(req, res) {
    recipeStore.loadAll(function (err, recipes:Array<fettyBossy.Data.IRecipe>) {
        res.json(recipes);
    });
}

/**
 *
 * @param req
 * @param res
 */
function publicGetRecipe(req, res) {
    var recipeId:string = req.params.recipeId;

    recipeStore.loadRecipe(recipeId, function (err, recipe:fettyBossy.Data.IRecipe) {
        res.json(recipe);
    });
}

/**
 *
 * @param req
 * @param res
 */
function publicGetRecipeByUser(req, res) {
    var userId:string = req.params.userId;

    recipeStore.loadRecipesByUser(userId, function (err, recipes:Array<fettyBossy.Data.IRecipe>) {
        res.json(recipes);
    });
}

/**
 *
 * @param req
 * @param res
 */
function publicSaveRecipe(req, res) {
    var recipe = req.body;

    recipeStore.persistRecipe(recipe, function (err, savedRecipe:fettyBossy.Data.IRecipe) {
        res.json(savedRecipe); // send back with generated id
    });
}

module.exports = {
    getAll: publicGetAll,
    getRecipe: publicGetRecipe,
    getRecipeByUser: publicGetRecipeByUser,
    saveRecipe: publicSaveRecipe
};
