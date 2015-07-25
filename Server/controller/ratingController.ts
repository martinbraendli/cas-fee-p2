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

    ratingStore.loadRatings(recipeId, function (err, ratings) {
        res.json(ratings);
    })
}

module.exports = {
    getRatings: publicGetRatings
};
