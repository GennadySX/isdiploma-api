/**
 * Created by GennadySX on @2020
 */

import {Users as User} from "../models/Users";
import Bcrypt from 'bcryptjs'
import randtoken from 'rand-token'
import {Tokens} from "../models/Token";

class AuthController {

    index(req, res, next) {
        res.json({"data": "test"})
    }


    login(req, res, next) {
        new User().findOne({email: req.body.email}, (not, user) => {
            if (user) {
                if (Bcrypt.compareSync(req.body.password, user.password)) {
                    const token = randtoken.uid(70);
                    const now = new Date()
                    new Tokens().create({
                        user_id: user._id,
                        token: token,
                        expireAfter: new Date(now.getDate() + 30).getDate(),
                        userAgent: {
                            deviceName: 'Android'
                        },
                        updatedAt: now.getDate(),
                    }, (err, token) => {
                        return res.json({
                            status: true,
                            user: user,
                            token: token.token
                        });
                    })
                } else
                    return res.json({status: false, mess: "Логин или пароль неверный"})
            } else res.json({status: false, mess: "Аккаунт не найден", data: req.body})
        })
    }


    register(req, res, next) {
        // return res.json({status: false, send:req.body});
        if (req.body && (req.body.email) && req.body.password) {
            const password = Bcrypt.hashSync(req.body.password, 10)
            req.body.password = password
        }

        new User().create(req.body, (err, data, reply) => {
            if (!err) {
                res.json({
                    status: true,
                    msg: "Новый пользователь создан",
                    data: data
                })
            } else res.json({
                status: false,
                mess: 'Такой логин уже существует',
                send: req.body,
                error: err
            });
        })
    }


}


export {AuthController}