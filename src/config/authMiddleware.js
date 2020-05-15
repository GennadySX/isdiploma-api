import {Tokens} from "../models/Token";

const authMiddleware = (req, res, next) =>
    (req.headers.authorization) ? checkToken(req.headers.authorization, res, next) : res.json({
        status: false,
        mess: "token not found"
    })

const checkToken = (token, res, next) => new Tokens().findOne({token: token}, (not, token) => {
    if (token) {
        res.user_id = token.user_id
        next()
    } else res.json({status: false, mess: "token expired"})
})


export {authMiddleware}