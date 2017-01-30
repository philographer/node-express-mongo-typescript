/**
 * Copyright (c) 2016 timeros -
 *
 * @author yuhogyun
 **/
"use strict";
/** External dependencies **/
/** Internal dependencies **/
const dbModel_1 = require("./dbModel");
class UserService {
    constructor() {
    }
    static createUser() {
        let user = new dbModel_1.UserModel({ username: 'Jane2' });
        user.username;
        return user.save();
    }
    static readUser(id) {
        return dbModel_1.UserModel.findOne({ _id: id });
    }
    static updateUser(userID, user) {
        return dbModel_1.UserModel.update({ _id: userID }, { username: user.username });
    }
    static deleteUser(id) {
        return dbModel_1.UserModel.remove({ _id: id });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserService;
