///<reference path='../_reference.ts' />

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


    //db.findOne({_id: id}, function (err, doc) {
    //    callback(err, doc);
    //});

    // TODO read user from database

    var user = {
        "_id": 2,
        "name": "rowens1",
        "email": "ntorres1@weather.com",
        "password": "rowens1"
    };

    callback({}, user);
}

/**
 * save given user, in case of register: check before if it already exists
 * @param user
 * @param callback
 */
function publicPersistUser(user:fettyBossy.Data.IUser, callback) {
    console.log("userStore - publicPersistUser('" + user + "')");

    var dbCallback = function (err, savedUser) {
        callback(err, savedUser);
    };

    if (user._id) {
        db.update({_id: user._id}, user, dbCallback);
    } else {
        db.insert(user, dbCallback);
    }}

/**
 * find user by name or email
 * @param user:fettyBossy.Data.IUser
 * @param callback
 */
function publicCheckUserExists(user:fettyBossy.Data.IUser, callback) {
    console.log("userStore - publicCheckUserExists('" + user + "')");
    db.find({$or: [{name: user.name}, {email: user.email}]}, function (err, users) {
        callback(err, users);
    });
}


module.exports = {
    loadUser: publicLoadUser,
    persistUser: publicPersistUser,
    checkUserExists: publicCheckUserExists
};