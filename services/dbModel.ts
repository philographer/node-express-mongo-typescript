/**
 * Copyright (c) 2016 timeros - Project
 *
 * @author yuhogyun
 **/

/** External dependencies **/
import {Document, model, Model, Schema} from 'mongoose';

/** Internal dependencies **/


let UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    age: Number,
    friends: [String],
    data: [Schema.Types.Mixed]
});

interface IUser extends Document {
    username: string;
    password: string;
    age: number;
    friends: string[];
    data: any[];
}

export let UserModel: Model<IUser> = model<IUser>('User', UserSchema);
