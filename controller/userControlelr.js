/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/
"use strict";
/** External dependencies **/
/** Internal dependencies **/
const userService_1 = require("./../services/userService");
class UserController {
    constructor() {
    }
    static createUser() {
        return userService_1.default.createUser();
    }
    static readUser(id) {
        return userService_1.default.readUser(id);
    }
    static updateUser(userID, user) {
        return userService_1.default.updateUser(userID, user);
    }
    static deleteUser(id) {
        return userService_1.default.deleteUser(id);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserController;
