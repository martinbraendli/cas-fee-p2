///<reference path='../_reference.ts' />

/**
 * userController
 */

var userStore = require('../services/userStore.js');
var authCtrl = require('./authController');

/**
 *
 * @param req
 * @param res
 */
function publicGetUser(req, res) {
    var userId:string = req.params.userId;
    userStore.loadUser(userId, function (err, user:fettyBossy.Data.IUser) {
        res.json(user);
    });
}

function publicRegisterUser(req, res) {
    var user:fettyBossy.Data.IUser = req.body;

    // TODO passwort verschlüsseln!
    userStore.persistUser(user, function (err, savedUser:fettyBossy.Data.IUser) {
        var response = <fettyBossy.Services.IRegisterUserResult>{};
        response.successful = true;
        response.message = 'user saved';
        response.registeredUser = savedUser;

        // auto-login after registration was successful
        authCtrl.authenticate(savedUser.name, savedUser.password, function(err, authenticatedUser:fettyBossy.Data.IUser){
            if(authenticatedUser){
                req.session.regenerate(function(){
                    req.session.user = user;
                    req.session.success = 'Authenticated as ' + authenticatedUser.name;

                    var response = <fettyBossy.Services.IRegisterUserResult>{};
                    response.successful = false;
                    response.message = 'user saved';
                    response.registeredUser = authenticatedUser;

                    res.json(response);
                });
            } else {
                req.session.error = 'Automatic login after register failed';
                req.session.destroy(); // to be sure
                res.status(401);
                res.send(false);
            }
        });
    });
}

module.exports = {
    getUser: publicGetUser,
    registerUser: publicRegisterUser
};
