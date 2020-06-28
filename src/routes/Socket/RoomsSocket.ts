import RoomController from "@controllers/RoomController";

export default class RoomsSocket {
    socket: any
    ioSocket: any

    constructor(io: any, socket: any) {
        this.ioSocket = io
        this.socket = socket
    }


    public run() {
        this.socket.on('room_send', (room: any, message: any) => {
            console.log('message room is ', room)
            new RoomController().newMessage(room, message, this.socket)
        });
        //
        this.socket.on("room_check_req", (friend_id: Object | any ) => new RoomController().roomCheckByMembers(friend_id, this.socket))


        this.socket.on('get_room_emit', (room: any) => new RoomController().getRoomData(room, this.socket))
        this.socket.on('room_join', (room: any) => new RoomController().joinIt(room, this.socket))

        this.socket.on('get_room_list', () => new RoomController().getRoomList(this.socket))

    }




}
