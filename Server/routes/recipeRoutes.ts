///<reference path='../_reference.ts' />

/**
 * recipeRoutes
 */

var recipeCtrl = require('../controller/recipeController.js');
var authCtrl = require('../controller/authController.js');

/**
 * Recipe routes
 * @type {Router}
 */
module.exports = (function () {
    var express = require('express');

    var router = express.Router();

    router.get("/", recipeCtrl.getAll);
    router.post("/", authCtrl.requiredAuthentication, recipeCtrl.saveRecipe);
    router.get("/:recipeId/", recipeCtrl.getRecipe);
    router.delete("/:recipeId/", recipeCtrl.deleteRecipe);
    router.get("/byUser/:userId/", recipeCtrl.getRecipeByUser);

    return router;
})();