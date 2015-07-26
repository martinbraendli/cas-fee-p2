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

function publicRegisterUser(req, res) {
    var user:fettyBossy.Data.IUser = req.body;

    userStore.checkUserExists(user, function (err, users) {
        if (users && users.length > 0) {
            // error
            res.status(400);
            var response = <fettyBossy.Services.IRegisterUserResult>{};
            response.successful = false;
            response.message = 'user exists';
            res.json(response);
        } else {
            // user does not exist yet > save it
            userStore.persistUser(user, function (err, savedUser) {
                var response = <fettyBossy.Services.IRegisterUserResult>{};
                response.successful = false;
                response.message = 'user saved';
                response.registeredUser = savedUser;
                res.json(response);
            });
        }
    });
}

module.exports = {
    getUser: publicGetUser,
    registerUser: publicRegisterUser
};
