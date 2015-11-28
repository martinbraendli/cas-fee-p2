///<reference path='../_reference.ts' />

import IRating = fettyBossy.Data.IRating;
/**
 * recipeStore
 */

var Datastore = require('nedb');
var db = new Datastore({filename: './data/recipe.db', autoload: true});
var ratingStore = require('../services/ratingStore.js');

/**
 * load all available recipes
 * @param callback
 */
function publicLoadAllRecipes(callback) {
    console.log("recipeStore - loadAllRecipes()");
    db.find({}, function (err, recipes:Array<fettyBossy.Data.IRecipe>) {
        var recipeIds = [];
        for (var i = 0; i < recipes.length; i++) {
            var recipe = recipes[i];
            recipeIds.push(recipe._id);
        }

        // calculate avg rating
        ratingStore.loadRatingsForRecipes(recipeIds, function (err, ratings:IRating[]) {
            var ratingMap = new Array();
            for (var i = 0; i < ratings.length; i++) {
                var rating = ratings[i];

                var ratingCount = ratingMap[rating.recipeId];
                if (!ratingCount) {
                    ratingCount = {total: 0, count: 0};
                    ratingMap[rating.recipeId] = ratingCount;
                }
                ratingCount.total = ratingCount.total + parseInt(rating.stars);
                ratingCount.count = ratingCount.count + 1;
            }

            for (var property in ratingMap) {
                if (ratingMap.hasOwnProperty(property)) {
                    var rm = ratingMap[property];
                    var schnitt = rm.total / rm.count;
                    rm.avg = rm.total / rm.count;
                }
            }

            for (var i = 0; i < recipes.length; i++) {
                var recipe = recipes[i];
                if (ratingMap[recipe._id]) {
                    recipe.avgRating = ratingMap[recipe._id].avg;
                } else {
                    recipe.avgRating = 1;
                }
            }

            callback(err, recipes);
        });
    });
}

/**
 * load one recipe by it's id
 * @param recipeId
 * @param callback
 */
function publicLoadRecipe(recipeId:string, callback) {
    console.log("recipeStore - loadRecipe('" + recipeId + "')");
    db.findOne({_id: recipeId}, function (err, recipe:fettyBossy.Data.IRecipe) {
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

    var dbCallback = function (err, savedRecipe:fettyBossy.Data.IRecipe) {
        callback(err, savedRecipe);
    };

    var dbCallbackInsert = function (err) {
        if (err) {
            return callback(err);
        } else {
            // load updated recipe and return it
            publicLoadRecipe(recipe._id, callback);
        }
    };

    if (recipe._id) {
        db.update({_id: recipe._id}, recipe, dbCallbackInsert);
    } else {
        db.insert(recipe, dbCallback);
    }
}

module.exports = {
    loadAll: publicLoadAllRecipes,
    loadRecipe: publicLoadRecipe,
    loadRecipesByUser: publicLoadRecipesByUser,
    persistRecipe: publicPersistRecipe
};