/**
 * Created by GennadySX on @2020
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema
import Model from "./Model";

const blogs_table = new Schema({
    text: String,
    user_id: Schema.ObjectId,
    comments: Array,

}, {
    versionKey: false
});

let table = mongoose.model('blogs', blogs_table, 'blogs')


class Blogs extends Model {
    constructor(modelTable = table) {
        super(modelTable);
    }
}


export {
    Blogs
}
