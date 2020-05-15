import {get, put, post, router, del} from "../../config/router";
import {BlogController} from "../../controllers/BlogController";
import {IndexController} from "../../controllers/IndexController";



const IndexRouter = () => {
    get('/', new IndexController().index)


}


export {
    IndexRouter,
    router
}


