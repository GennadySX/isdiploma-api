import {createSchema, Type} from "ts-mongoose";
import {TaskConst} from '@const/Model/TaskConst';




const TaskSchema = createSchema(
    {
        type: Type.string({required: true, enum: TaskConst.type as any, default: TaskConst.type[0]}),
        title: Type.string({ required: true }),
        description:  Type.string({ required: false}),
        // executors: [Type.objectId({ required: true, unique: true })],
        creator: Type.objectId({ required: false }),
        project_id: Type.objectId({ required: true }),
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);



export  {
    TaskSchema
}

