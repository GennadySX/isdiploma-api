import {Blogs} from "../models/Blogs";

class BlogController {

    index(req, res) {
        new Blogs().all((err, list) => res.json({status: true, blogs: list}))
    }

    getBy(req, res) {
        (req.params.id) ?
            new Blogs().findOne({_id: req.params.id},
                (err, blog) => (blog) ? res.json({status: true, blog: blog}) : res.json({
                    status: false,
                    mess: "blog not created"
                }))
            : res.json({status: false, mess: "please, set blog_id for find"})
    }


    create(req, res) {
        new Blogs().create({
            user_id: res.user_id,
            text: req.body.blog_text
        }, (err, blog) => (blog) ? res.json({status: true, blog: blog})
            : res.json({status: false, mess: "blog not created"}))
    }


    update(req, res) {
        new Blogs().update({_id: req.params.id}, {text: req.body.blog_text},
            (err, blog) => (blog) ?
                new Blogs().findOne({_id: req.params.id}, (err, blog) => res.json({status: true, blog: blog}))
                : res.json({status: false, mess: "blog not updated"})
        )
    }


    delete(req, res) {
        new Blogs().delete({_id: req.params.id}, (err, blog) => (blog) ? res.json({
                status: true,
                mess: "blog destroyed"
            })
            : res.json({status: false, mess: "blog not updated"}))
    }


}


export {BlogController}