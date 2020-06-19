import Model from "@models/Model";
import {typedModel } from 'ts-mongoose';
import {TaskSchema} from "@migration/TaskTable";
import {GroupConst} from "@const/Model/GroupConst";


export default class Tasks extends Model {
    constructor(props = typedModel(GroupConst.table, TaskSchema)) {
        super(props);
    }

}
