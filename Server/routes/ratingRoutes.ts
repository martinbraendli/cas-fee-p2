///<reference path='../_reference.ts' />

/**
 * recipeRoutes
 */

var ratingCtrl = require('../controller/ratingController.js');
var authCtrl = require('../controller/authController.js');

/**
 * Recipe routes
 * @type {Router}
 */
module.exports = (function () {
    var express = require('express');

    var router = express.Router();

    router.get("/:recipeId/", ratingCtrl.getRatings);
    router.post("/", authCtrl.requiredAuthentication, ratingCtrl.saveRating);

    return router;
})();