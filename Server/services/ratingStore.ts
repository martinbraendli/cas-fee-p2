///<reference path='../_reference.ts' />

/**
 * ratingStore
 */

var Datastore = require('nedb');
var db = new Datastore({filename: './data/rating.db', autoload: true});

/**
 * load all ratings for given recipe
 * @param recipeId
 * @param callback
 */
function publicLoadRatings(recipeId:string, callback) {
    console.log("ratingStore - loadRatings('" + recipeId + "')");

    db.find({recipeId: recipeId}, function (err, ratings:Array<fettyBossy.Data.IRating>) {
        callback(err, ratings);
    });
}

function publicLoadRatingsForRecipes(recipeIds:string[], callback) {
    console.log("ratingStore - publicLoadRatingsForRecipes('" + recipeIds + "')");

    db.find({recipeId: {$in: recipeIds}}, function (err, ratings:Array<fettyBossy.Data.IRating>) {
        callback(err, ratings);
    });
}

function publicPersistRating(rating:fettyBossy.Data.IRating, callback) {
    console.log("ratingStore - persistRating('" + rating + "')");

    var dbCallback = function (err, savedRating:fettyBossy.Data.IRating) {
        callback(err, savedRating);
    };
    if (rating._id) {
        console.log("ratingStore - persistRating('" + rating + "') - exists: update");
        db.update({_id: rating._id}, rating, dbCallback);
    } else {
        console.log("ratingStore - persistRating('" + rating + "') - does not exists: insert");
        db.insert(rating, dbCallback);
    }
}

module.exports = {
    loadRatings: publicLoadRatings,
    loadRatingsForRecipes: publicLoadRatingsForRecipes,
    persistRating: publicPersistRating
};