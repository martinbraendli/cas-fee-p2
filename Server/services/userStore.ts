///<reference path='../_reference.ts' />

/**
 * userStore
 */

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

module.exports = {
    loadUser: publicLoadUser
};