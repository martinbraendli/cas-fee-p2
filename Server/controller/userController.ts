///<reference path='../_reference.ts' />

/**
 * userController
 */

var userStore = require('../services/userStore.js');

/**
 *
 * @param req
 * @param res
 */
function publicGetUser(req, res) {
    var userId:string = req.params.userId;
    userStore.loadUser(userId, function (err, user) {
        res.json(user);
    });
}

module.exports = {
    getUser: publicGetUser
};
