import IndexRouter from './Http/IndexRouter'
import {APIRouter} from "./Http/ApiRouter";
import {router} from "./Http/ApiRouter";



router.use('/', IndexRouter);



router.use('/api', APIRouter);


export default router