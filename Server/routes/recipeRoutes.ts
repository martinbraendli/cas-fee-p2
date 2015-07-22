/**
 * Recipe routes
 * @type {Router}
 */
module.exports = (function () {
    var express = require('express');

    var router = express.Router();

    router.get("/", function (req, res) {
        //indexController.index(req, res);
        res.json("{recipes}"); // TODO version into own config file
    });

    return router;
})();