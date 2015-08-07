///<reference path='../_reference.ts' />

/**
 * ratingController
 */

var ratingStore = require('../services/ratingStore.js');

/**
 *
 * @param req
 * @param res
 */
function publicGetRatings(req, res) {
    var recipeId:string = req.params.recipeId;
    console.log("ratingController - getRatings('" + recipeId + "')");

    ratingStore.loadRatings(recipeId, function (err, ratings:Array<fettyBossy.Data.IRating>) {
        console.log("ratingController - getRatings('" + recipeId + "') - loaded: " + ratings.length);
        res.json(ratings);
    })
}

function publicSaveRating(req, res) {
    var rating:fettyBossy.Data.IRating = req.body;
    console.log("ratingController - saveRating('" + rating + "')");

    ratingStore.persistRating(rating, function (err, rating:fettyBossy.Data.IRating) {
        var response = <fettyBossy.Services.ISaveRatingResult>{};
        response.successful = err == null;
        response.savedRating = rating;
        res.json(response); // send back with generated id
    });
}

module.exports = {
    getRatings: publicGetRatings,
    saveRating: publicSaveRating
};
