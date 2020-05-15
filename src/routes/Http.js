import {IndexRouter} from './Http/IndexRouter'
import {APIRouter} from "./Http/ApiRouter";
import {AuthRouter} from "./Http/AuthRouter";

const HttpRouter = (app) => {

    app.use('/', IndexRouter)

    app.use('/auth', AuthRouter)

    app.use('/api/auth', APIRouter)

};

export {HttpRouter}