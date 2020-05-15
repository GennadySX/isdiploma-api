import {Cors} from "./config/Cors";
import {HttpRouter} from "./routes/Http";

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),

    Mongo = require('./config/database'),

    app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

//app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => Cors(req, res, next));

HttpRouter(app);


module.exports = app;
