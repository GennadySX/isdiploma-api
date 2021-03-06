import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import 'express-async-errors';
import http from 'http';
//import bodyParse from 'body-parser'

//
import io from 'socket.io';
import {Mongo} from './config/MongoDB'


// Init express
const app = express();
Mongo.connect();



import BaseRouter from './routes';
import logger from '@config/Logger';
import {Cors} from "@config/Cors";


/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// Security



// Add APIs
app.use('/', BaseRouter);


// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});



/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/
/*
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));



app.get('*', (req: Request, res: Response) => {
    res.json({project: "running"});
});*/

export default app;
