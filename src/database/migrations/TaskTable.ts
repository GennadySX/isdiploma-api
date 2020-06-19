import {createSchema, Type} from "ts-mongoose";
import {RoomConst} from "@const/Model/RoomConst";
import {FileTypeConst} from "@const/FileTypeConstants";



const Storage = createSchema(
    {
        type: Type.string({ required: true, enum: FileTypeConst as any, default: FileTypeConst[0]}),
        sender_id: Type.objectId({required: true}),
        path: Type.string({required: true}),
    },
    { _id: true, timestamps: true }
);

const Comment = createSchema(
    {
        type: Type.string({ required: true, enum: RoomConst.chat.type as any, default: RoomConst.chat.type[0]}),
        sender_id: Type.objectId({required: true}),
        text: Type.string({required: true}),
    },
    { _id: true, timestamps: true }
);



const TaskSchema = createSchema(
    {
        name: Type.string({ required: true }),
        description:  Type.string({ required: false}),
        storage: [Type.schema({ required: false }).of(Storage)],
        comments: [Type.schema({ required: false }).of(Comment)],
        executors: [Type.objectId({ required: true, unique: true })],
        creator: Type.objectId({ required: false }),
        project: Type.objectId({ required: false }),
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);



export  {
    TaskSchema
}

