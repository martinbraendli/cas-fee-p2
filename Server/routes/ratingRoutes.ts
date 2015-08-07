///<reference path='../_reference.ts' />

/**
 * recipeRoutes
 */

var ratingCtrl = require('../controller/ratingController.js');

/**
 * Recipe routes
 * @type {Router}
 */
module.exports = (function () {
    var express = require('express');

    var router = express.Router();

    router.get("/:recipeId/", ratingCtrl.getRatings);
    router.post("/", ratingCtrl.saveRating);

    return router;
})();