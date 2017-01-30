/**
 * Copyright (c) 2016 timeros -
 *
 * @author yuhogyun
 **/

/** External dependencies **/

/** Internal dependencies **/
import {UserModel, IUser} from './dbModel';

export default class UserService {
    constructor() {

    }

    static createUser() {
        let user = new UserModel({username: 'Jane2'});
        user.username;
        return user.save();
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
}
