/**
 * Created by GennadySX on @2020
 */

import {get, put, post, router, del} from "../../config/router";
import {AuthController} from "../../controllers/AuthController";

//Login
post('/login', new AuthController().login)


//Register
post('/register', new AuthController().register)


export default router;

