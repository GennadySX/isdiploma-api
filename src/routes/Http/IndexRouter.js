import {get, put, post, router, del} from "../../config/router";
import {IndexController} from "../../controllers/IndexController";


get('', new IndexController().index)


export default router;

