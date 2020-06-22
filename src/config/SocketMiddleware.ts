import {Request, Response, NextFunction} from "express";
import TokensController from "@controllers/Auth/TokensController";

const SocketMiddleware = (socket: any, next: NextFunction) => {
    (socket.handshake.query && socket.handshake.query.token) ?
        new TokensController().getOne({token: socket.handshake.query.token}
            , (res: any) => {
                if(res.error) {
                    next(new Error('Токен не правильный, авторизуйтесь еще раз!'))
                } else {
                    socket.user_id = res && res.user_id ? res.user_id : null
                    next()
                }
            }
        )
        : next(new Error('Не автроизвонный пользователь'));
}


export {
    SocketMiddleware
};

