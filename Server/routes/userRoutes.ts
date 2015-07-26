///<reference path='../_reference.ts' />

/**
 * userRoutes
 */

var userCtrl = require('../controller/userController.js');

/**
 * Recipe routes
 * @type {Router}
 */
module.exports = (function () {
    var express = require('express');

    var router = express.Router();

    router.get("/", userCtrl.getUser);
    router.get("/:userId/", userCtrl.getUser);
    router.post("/register/", userCtrl.registerUser);

    return router;
})();