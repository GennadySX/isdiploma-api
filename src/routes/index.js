import {get, put, post, router, del} from "../config/router";
import {AuthController} from "../controllers/AuthController";
import {IndexController} from "../controllers/IndexController";

import {fileUploadingConfig, fileUploadingRules} from "../utils/uploader";

const multer  = require('multer'),
    upload = multer(fileUploadingConfig).fields(fileUploadingRules)


/* GET home page. */
get("/", new AuthController().index)




post('/login', new AuthController().login)
post('/register', new AuthController().register)




module.exports = router;

