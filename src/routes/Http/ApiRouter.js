/**
 * Created by GennadySX on @2020
 */

import {get, put, post, router, del} from "../../config/router";
import {BlogController} from "../../controllers/BlogController";


get('/all', new BlogController().index)
get('/:id', new BlogController().getBy)

post('/', new BlogController().create)
put('/:id', new BlogController().update)
del('/:id', new BlogController().delete)

export default router
