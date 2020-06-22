import {createSchema, Type} from "ts-mongoose";
import {RoomConst} from "@const/Model/RoomConst";

const Executors = createSchema(
    {
        user: Type.objectId({ required: true, unique: true }),
        joined: Type.date({default: new Date() as any}),
        invitedBy: Type.objectId({required: false}),
    },
    { _id: false, timestamps: true }
);

const Comment = createSchema(
    {
        type: Type.string({ required: true, enum: RoomConst.chat.type as any, default: RoomConst.chat.type[0]}),
        sender_id: Type.objectId({required: true}),
        text: Type.string({required: true}),
    },
    { _id: true, timestamps: true }
);



const ProjectSchema = createSchema(
    {
        name: Type.string({ required: false, unique: true }),
        avatar: Type.string({ required: false }),
        description: [Type.schema({ required: false }).of(Comment)],
        tasks: [Type.schema({ required: false }).of(Comment)],
        executors: [Type.schema({required: false}).of(Executors)],
        creator: Type.objectId({ required: false }),
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);



export  {
    ProjectSchema
}

