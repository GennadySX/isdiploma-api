/**
 * Created by GennadySX on @2020
 */

var express = require('express');
var router = express.Router();
import {fileUploadingConfig, fileUploadingRules} from "../utils/uploader";

const multer = require('multer'),
    upload = multer(fileUploadingConfig).fields(fileUploadingRules)


const get = (url, controller) => router.get(url, (req, res, next) => controller(req, res, next));

const post = (url, controller) => router.post(url, (req, res, next) => controller(req, res, next));

const file = (url, controller) => router.post(url, upload, (req, res, next) => controller(req, res, next));

const put = (url, controller) => router.put(url, (req, res, next) => controller(req, res, next));

const del = (url, controller) => router.delete(url, (req, res, next) => controller(req, res, next));


export {
    router,
    get,
    post,
    put,
    del,
    file
}