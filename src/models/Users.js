import mongoose from 'mongoose'

const Schema = mongoose.Schema
import uniqueValidator from "mongoose-unique-validator"
import Model from "./Model";

var user_table = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    avatar: String,
    about: String,
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 30
    }
}, {
    versionKey: false
});
user_table.plugin(uniqueValidator)

let table = mongoose.model('users', user_table, 'users')


class Users extends Model{
    constructor(modelTable = table) {
        super(modelTable);
    }
}


export {
    Users
}
