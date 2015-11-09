///<reference path='../_reference.ts' />

/**
 * userRoutes
 */

var userCtrl = require('../controller/userController.js');
var authCtrl = require('../controller/authController.js');

/**
 * Recipe routes
 * @type {Router}
 */
module.exports = (function () {
    var express = require('express');

    var router = express.Router();

    router.get("/", userCtrl.getUser);
    router.get("/:userId/", userCtrl.getUser);

    router.post("/register/", authCtrl.userNotExist, userCtrl.registerUser);
    router.post("/save/", authCtrl.requiredAuthentication, userCtrl.saveUser);
    router.post("/login/", authCtrl.login);
    router.get("/logout/:userName", authCtrl.logout);

    return router;
})();