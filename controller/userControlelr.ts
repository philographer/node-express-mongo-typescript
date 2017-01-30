/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/

/** External dependencies **/

/** Internal dependencies **/
import UserService from './../services/userService';

export default class UserController {

    constructor() {

    }

    static createUser() {
        return UserService.createUser();
    }

    static readUser(id) {
        return UserService.readUser(id);
    }

    static updateUser(userID, user) {
        return UserService.updateUser(userID, user);
    }

    static deleteUser(id) {
        return UserService.deleteUser(id);
    }

}
