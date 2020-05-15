import {SocketConfig} from "../config/sockets";
import * as ioSocket from 'socket.io'

class SocketsRouter extends SocketConfig {
    constructor(server) {
        super(server)
        this.socket = ioSocket.listen(server)
    }


    run(){
        this.socket.on('connection', (mSocket) => {
            console.log('sockets connection')

                //new ChatSockets(this.socket, mSocket);



        })

    }

}



export {SocketsRouter}