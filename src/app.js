/**
 * Created by GennadySX on @2020
 */

import {Cors} from "./config/Cors";
import {SocketsRouter} from "./routes/Sockets";

import IndexRouter from "./routes/Http/IndexRouter";
import AuthRouter from "./routes/Http/IndexRouter";
import APIRouter from "./routes/Http/ApiRouter";

var express = require('express'),
    path = require('path'),
    http = require('http'),
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

app.use('/', IndexRouter)
app.use('/auth', AuthRouter)
app.use('/api', APIRouter)

const socket = (server) => {
    new SocketsRouter(server).run()
}

export {
    app,
    socket
}
