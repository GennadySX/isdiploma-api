import {Cors} from "./config/Cors";
import {authMiddleware} from "./config/authMiddleware";
import {fileUploadingConfig, fileUploadingRules} from "./utils/uploader";

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),

    Mongo = require('./config/database'),

    indexRouter = require('./routes/index'),
    blogRouter = require('./routes/blog'),
    userRouter = require('./routes/users'),

    app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => Cors(req, res, next));


app.use('/blog', authMiddleware, blogRouter);
app.use('/user', authMiddleware, userRouter);
app.use('/', indexRouter);

module.exports = app;
