import {get, put, post, router, del, file} from "../config/router";
import {UserController} from "../controllers/UserController";

/* GET home page. */
get("/profile", new UserController().user)
get("/get_all", new UserController().getAll)

put("/profile/update", new UserController().update)

file("/profile/avatar", new UserController().avatar)


module.exports = router;

