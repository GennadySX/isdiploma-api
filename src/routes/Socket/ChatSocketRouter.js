


export class ChatSocketRouter {
    constructor(socket, mSocket) {
        this.socket = socket;
        this.mSocket = mSocket;

    }




    room() {

        this.mSocket.on('createRoom', (room) => {
            console.log('room is ', room)
        })


    }



}