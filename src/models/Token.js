/**
 * Created by GennadySX on @2020
 */

import mongoose from 'mongoose'
import Model from "./Model";

const Schema = mongoose.Schema

var room_scheme = new Schema({
    user_id: Schema.ObjectId,
    token: String,
    expireAfter: Date,
    userAgent: Array,
    updatedAt: {
        type: Date,
        default: new Date()
    },
}, {
    versionKey: false
});


let table = mongoose.model('tokens', room_scheme, 'tokens');

class Tokens extends Model {
    constructor(modelTable = table) {
        super(modelTable);
    }


}


export {
    Tokens
}
