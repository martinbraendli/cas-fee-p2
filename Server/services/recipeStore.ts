///<reference path='../_reference.ts' />

/**
 * recipeStore
 */

var Datastore = require('nedb');
var db = new Datastore({filename: './data/recipe.db', autoload: true});

/**
 * load all available recipes
 * @param callback
 */
function publicLoadAll(callback) {
    console.log("recipeStore - loadAll()");
    db.find({}, function (err, recipes) {
        callback(err, recipes);
    });
}

/**
 * load one recipe by it's id
 * @param recipeId
 * @param callback
 */
function publicLoadRecipe(recipeId:string, callback) {
    console.log("recipeStore - loadRecipe('" + recipeId + "')");
    db.findOne({_id: recipeId}, function (err, recipe) {
        callback(err, recipe);
    });
}

module.exports = {
    loadAll: publicLoadAll,
    loadRecipe: publicLoadRecipe
};