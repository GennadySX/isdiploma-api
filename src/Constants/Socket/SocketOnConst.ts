/**
 * Created by GennadySX on @2020
 */


export const SocketOnConst = {
    file: "file",
    users: "users_all",
    user: {
        account: {
            _ : "user_account",
            update: "user_accout_update",
            avatar: "user_account_avatar"
        },
        friends: {
            get: "user_friend_get",
            getAll: "user_friend_getAll",
            update: "user_friend_update",
            block: "user_friend_update",
        },
        invite: {

        },
        groups: {

        },
        password: {
            update: "user_password_update",
            forgot: "user_password_forgot"
        }
    },
    room: {
        create: "room_create",
        update: "room_update",
        chat: {
            push: "room_chat_push",
            send: "room_chat_send",
            receive: "room_chat_receive",
            pop: "room_chat_pop",
            delete: "room_chat_delete",
            members: "room_members",
            get: "chat_get",
            getTypes: "chat_get_type",
        }


    },
    tokens: {},

}