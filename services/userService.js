/**
 * Copyright (c) 2016 timeros -
 *
 * @author yuhogyun
 **/
"use strict";
/** External dependencies **/
let bcrypt = require('bcrypt');
/** Internal dependencies **/
const dbModel_1 = require("./dbModel");
const config_1 = require("./../config");
class UserService {
    constructor() {
    }
    static createUser(username, password) {
        return new Promise((resolve, reject) => {
            this._encryptPassword(password).then((hashedPassword) => {
                let user = new dbModel_1.UserModel({ username: username, password: hashedPassword });
                user.save().then(() => {
                    resolve();
                }).catch((err) => {
                    reject(err);
                });
            });
        });
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
    static _encryptPassword(plaintextPassword) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(plaintextPassword, config_1.default.BCRYPT_SALT_ROUNDS).then((hash) => {
                resolve(hash);
            });
        });
    }
    static _verifyPassword(plainPassword, hash) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plainPassword, hash).then((res) => {
                resolve(res);
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserService;
