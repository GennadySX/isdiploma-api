/**
 * Created by GennadySX on @2020
 */

import {Users as User} from "../models/Users";
import Bcrypt from 'bcryptjs'
import randtoken from 'rand-token'
import {Tokens} from "../models/Token";

class IndexController {

    index(req, res, next) {
        return res.json({body: req.body, mess: "this is for only testing request types!."})
    }


}


export {IndexController}