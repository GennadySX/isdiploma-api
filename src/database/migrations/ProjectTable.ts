import {createSchema, Type} from "ts-mongoose";
import {TaskSchema} from '@migration/TaskTable';



const ProjectSchema = createSchema(
    {
        name: Type.string({ required: true}),
        avatar: Type.string({ required: false }),
        description: Type.string({required: true}),
        status: Type.boolean({default: true}),
        executors: [Type.objectId({ required: false })],
        creator: Type.objectId({ required: false }),
        // tasks: [Type.schema({required: true}).of(TaskSchema)]
    },
    { timestamps: { createdAt: true, updatedAt: true } }
);



export  {
    ProjectSchema
}

