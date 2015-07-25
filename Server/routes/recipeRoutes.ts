///<reference path='../_reference.ts' />

/**
 * recipeRoutes
 */

var recipeCtrl = require('../controller/recipeController.js');

/**
 * Recipe routes
 * @type {Router}
 */
module.exports = (function () {
    var express = require('express');

    var router = express.Router();

    router.get("/", recipeCtrl.getAll);
    router.get("/:recipeId/", recipeCtrl.getRecipe);

    return router;
})();