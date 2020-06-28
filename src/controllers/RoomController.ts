/**
 * Created by GennadySX on @2020
 */
import Controller from "@controllers/Controller";
import Room from "@models/Room";
import User from '@models/User';

export default class RoomController extends Controller {
    constructor() {
        super(new Room());
    }


    getRoomList(socket: any) {

        new User().all((err:any, users: any) => {

            super.getAll((roomList: any) => {
                console.log('room list', roomList)
                socket.emit('roomList', roomList, users);
            })

        });
    }


    public getRoomData(room:any, socket: any) {
        super.getOne({_id: room}, (roomData: any) => {
            console.log('room data', roomData)
            socket.emit('get_room',  roomData);
            socket.join(room._id)
        })
    }


    public joinIt(room:any, socket:any) {
        socket.join(room._id)
    }

    public newMessage(room: object | any, message: object | any, socket: any) {
        // console.log('message is', message)
        // console.log('room is', room)
        super.update(room, {"$push": {"messageList": message}}, (roomData: any) => {
            roomData.data ?
                super.getLast(room, 'messageList', (lastMessage: any) =>
                    socket.broadcast.emit("room_receive", lastMessage && lastMessage.data ? lastMessage.data : null, room))
                : console.log('Error  updated message list ', roomData.error)
        })
    }


    public async roomCheckByMembers(friend_id: any, socket: any): Promise<void> {
        //console.log('friend id for room ', friend_id)
        new Room().findOne({
                "$or": [
                    {members: [friend_id, socket.user_id]},
                    {members: [socket.user_id, friend_id]}
                ]
            },(err: Error, data: any) => {
               // console.log('friend room is', data)
                 !data ?
                     this.create(friend_id, socket).then(() => this.roomCheckByMembers(friend_id, socket))
                     : this.join(data, err, socket)
            }
        )
    }


    protected join(room: any, err: Error, socket: any) {
        socket.join(room._id)
        socket.emit('room_check_res', room, err)
    }

    async create(member: any, socket: any): Promise<void> {
        super.create({
            members: [socket.user_id, member],
            owner: socket.user_id
        }, (res: any) => {
            console.log('room created', res)
            socket.emit('room_created', res)
        })
    }








}