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
    recipeStore.loadAll(function (err, recipes) {
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

    recipeStore.loadRecipe(recipeId, function (err, recipe) {
        res.json(recipe);
    })
}

module.exports = {
    getAll: publicGetAll,
    getRecipe: publicGetRecipe
};
