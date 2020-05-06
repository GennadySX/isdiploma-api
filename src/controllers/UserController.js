import {Users as User} from "../models/Users";
import Bcrypt from 'bcryptjs'
import randtoken from 'rand-token'
import {Tokens} from "../models/Token";

class UserController {

    index(req, res) {
        res.json({"data": "test"})
    }


    getAll(req, res) {
        new User().all((err, data) => res.json({status: true, data: data}))
    }

    user(req, res) {
        if (res.user_id) {
            new User().findOne({_id: res.user_id} , (not, user) => (user) ? res.json({user: user}) : res.json({status: false, mess: "not found user"}));
        }

    }


    update(req, res) {
            new User().update({_id: res.user_id}, req.body, (err, updated) =>
                (updated) ?
                    new User().findOne({_id: res.user_id}, (err, user) => (user) ?
                        res.json({status: true, user: user}) :
                        res.json({status: false, mess: "user not updated"}))
            :  res.json({status: false, mess: "user not updated"}))
    }

    avatar(req, res) {
        new User().update({_id: res.user_id}, {avatar: req.files.image[0].path}, (err, updated) => (updated) ?
        res.json({status: true, avatar: req.files.image[0].path})
        : res.json({status: false, mess: "file not uploaded or error of server result"}))
    }
}


export {UserController}