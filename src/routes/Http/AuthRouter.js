import {get, put, post, router, del} from "../../config/router";
import {BlogController} from "../../controllers/BlogController";



const AuthRouter = () => {

    get('/all', new BlogController().index)
    get('/:id', new BlogController().getBy)

    post('/', new BlogController().create)
    put('/:id', new BlogController().update)
    del('/:id', new BlogController().delete)

}


export {
    AuthRouter,
    router
}



