import Model from "@models/Model";
import {typedModel } from 'ts-mongoose';
import {TaskSchema} from "@migration/TaskTable";
import {TaskConst} from '@const/Model/TaskConst';


export default class Tasks extends Model {
    constructor(props = typedModel(TaskConst.table, TaskSchema)) {
        super(props);
    }

}
