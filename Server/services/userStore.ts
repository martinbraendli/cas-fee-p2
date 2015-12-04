///<reference path='../_reference.ts' />

import IUser = fettyBossy.Data.IUser;
/**
 * userStore
 */

var Datastore = require('nedb');
var db = new Datastore({filename: './data/user.db', autoload: true});

/**
 * load one user by its id
 * @param userId
 * @param callback
 */
function publicLoadUser(userId:string, callback) {
    console.log("userStore - loadUser('" + userId + "')");

    db.findOne({_id: userId}, function (err, user:fettyBossy.Data.IUser) {
        callback(err, user);
    });
}

/**
 * load one user by its name
 * @param name:string
 * @param callback
 */
function publicLoadUserByName(name:string, callback) {
    console.log("userStore - loadUserByName('" + name + "')");

    db.findOne({name: name}, function (err, user:fettyBossy.Data.IUser) {
        console.log("userStore - loadUser('" + name + "') - loaded user: " + user);
        callback(err, user);
    });
}

/**
 * save given user, in case of register: check before if it already exists
 * @param user
 * @param callback
 */
function publicPersistUser(user:fettyBossy.Data.IUser, callback) {
    console.log("userStore - publicPersistUser('" + user + "')");

    var dbCallback = function (err, savedUser:fettyBossy.Data.IUser) {
        callback(err, savedUser);
    };

    if (user._id) {

        var updateObject = <IUser> {
            email: user.email
        };
        if (user.password) {
            updateObject.password = user.password;
        }

        db.update({_id: user._id}, {$set: updateObject}, dbCallback);
    } else {
        db.insert(user, dbCallback);
    }
}

/**
 * find user by name or email
 * @param user:fettyBossy.Data.IUser
 * @param callback
 */
function publicCheckUserExists(user:fettyBossy.Data.IUser, callback) {
    console.log("userStore - publicCheckUserExists('" + user + "')");
    db.find({$or: [{name: user.name}, {email: user.email}]}, function (err, users:Array<fettyBossy.Data.IUser>) {
        callback(err, users);
    });
}


module.exports = {
    loadUser: publicLoadUser,
    loadUserByName: publicLoadUserByName,
    persistUser: publicPersistUser,
    checkUserExists: publicCheckUserExists
};