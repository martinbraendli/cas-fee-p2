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

    db.find({recipeId: recipeId}, function (err, ratings) {
        callback(err, ratings);
    });
}

module.exports = {
    loadRatings: publicLoadRatings
};