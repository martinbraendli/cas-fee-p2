/**
 * Index routes
 * @type {Router}
 */
module.exports = (function () {
    var express = require('express');

    var router = express.Router();

    router.get("/", function (req, res) {
        //indexController.index(req, res);
        res.json("{version: 0.0.1}"); // TODO version into own config file
    });

    return router;
})();