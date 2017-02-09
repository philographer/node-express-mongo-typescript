/**
 * Copyright (c) 2016 timeros -
 *
 * @author yuhogyun
 **/

/** External dependencies **/
let bcrypt = require('bcrypt');

/** Internal dependencies **/
import {UserModel} from './dbModel';
import CONFIG from './../config';

export default class UserService {
    constructor() {

    }

    static createUser(username, password) {
        return new Promise((resolve, reject) => {
            this._encryptPassword(password).then((hashedPassword) => {
                let user = new UserModel({username: username, password: hashedPassword});
                user.save().then(() => {
                    resolve();
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    static readUser(id) {
        return UserModel.findOne({_id: id});
    }

    static updateUser(userID, user) {
        return UserModel.update({_id: userID}, {username: user.username});
    }

    static deleteUser(id) {
        return UserModel.remove({_id: id});
    }

    static _encryptPassword(plaintextPassword) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(plaintextPassword, CONFIG.BCRYPT_SALT_ROUNDS).then((hash) => {
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
