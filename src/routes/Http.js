
import AuthRouter from './Http/AuthRouter'

const HttpRouter = (app) => {

    app.use('/auth', AuthRouter)





}

export {HttpRouter}