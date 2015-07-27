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

/**
 * load all recipes for given user
 * @param userId
 * @param callback
 */
function publicLoadRecipesByUser(userId:string, callback) {
    console.log("recipeStore - publicLoadRecipesByUser('" + userId + "')");
    db.find({userId: userId}, function (err, recipes) {
        console.log("recipeStore - publicLoadRecipesByUser('" + userId + "') - returning '" + recipes.length + "' recipes");
        callback(err, recipes);
    });
}

/**
 * load one recipe by it's id
 * @param recipe:fettyBossy.Data.IRecipe
 * @param callback
 */
function publicPersistRecipe(recipe:fettyBossy.Data.IRecipe, callback) {
    console.log("recipeStore - publicPersistRecipe('" + recipe + "')");

    var dbCallback = function (err, savedRecipe) {
        callback(err, savedRecipe);
    };

    if (recipe._id) {
        db.update({_id: recipe._id}, recipe, dbCallback);
    } else {
        db.insert(recipe, dbCallback);
    }
}

module.exports = {
    loadAll: publicLoadAll,
    loadRecipe: publicLoadRecipe,
    loadRecipesByUser: publicLoadRecipesByUser,
    persistRecipe: publicPersistRecipe
};