///<reference path='../_reference.ts' />

/**
 * authController
 */

var userStore = require('../services/userStore.js');
var crypto = require('crypto');

/**
 *
 * @param password the password in cleartext
 * @returns the encrypted password
 */
function publicEncryptPassword(password:string):string {
    return crypto.createHash('sha256').update(password).digest('hex');
}

function publicAuthenticate(name:string, password:string, callback) {
    console.log("authController publicAuthenticate('" + name + "', '****')");

    userStore.loadUserByName(name, function (err, user:fettyBossy.Data.IUser) {
        if (user) {
            if (err) {
                return callback(err);
            } else {
                // check passwort
                if (publicEncryptPassword(password) === user.password) {
                    console.log("authController publicAuthenticate('" + name + "', '****') - login successful");
                    return callback(null, user);
                } else {
                    console.log("authController publicAuthenticate('" + name + "', '****') - wrong password");
                    return callback(new Error("Wrong password"));
                }
            }
        } else {
            console.log("authController publicAuthenticate('" + name + "', '****') - user not found");
            return callback(new Error("User not exists"));
        }
    });
}

function publicUserNotExist(req, res, next) {
    console.log("authController publicUserNotExist()");
    var user:fettyBossy.Data.IUser = req.body;

    userStore.loadUserByName(user.name, function (err, user:fettyBossy.Data.IUser) {
        if (user) {
            // user exist, register not possible
            req.session.error = "User exist";
            res.status(401);
            res.send({"successful": false, "message": "User bereits registriert"});
        } else {
            next();
        }
    });
}

function publicLogin(req, res) {
    var user:fettyBossy.Data.IUser = req.body;
    console.log("authController publicLogin('" + user.name + "')");

    publicAuthenticate(user.name, user.password, function (err, authenticatedUser:fettyBossy.Data.IUser) {
        if (authenticatedUser) {
            console.log("authController publicLogin('" + authenticatedUser.name + "') - successful");
            req.session.regenerate(function () {
                req.session.user = authenticatedUser;
                req.session.success = "Authenticated as '" + authenticatedUser.name + "'";
                res.status(200);
                res.json(authenticatedUser);
            });
        } else {
            console.log("authController publicLogin('" + user.name + "') - failed, user not found");
            var msg = 'Authentication failed, please check your username and password.'
            req.session.error = msg;
            req.session.destroy(); // to be sure
            res.status(401);
            var responseMessage = {
                successful: false,
                message: msg
            };
            res.json(responseMessage);
        }
    })
}

function publicLogout(req, res) {
    var userName:string = req.params.userName;
    console.log("authController publicLogout('" + userName + "')");

    req.session.destroy(function () {
        res.send(true);
    });
}

function publicRequiredAuthentication(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        req.session.error = 'Access denied!';
        res.status(401);
        res.send(false);
    }
}

module.exports = {
    encryptPassword: publicEncryptPassword,
    authenticate: publicAuthenticate,
    userNotExist: publicUserNotExist,
    login: publicLogin,
    logout: publicLogout,
    requiredAuthentication: publicRequiredAuthentication
};