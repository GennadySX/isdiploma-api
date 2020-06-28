import Model from "@models/Model";
import {typedModel } from 'ts-mongoose';
import {ProjectSchema} from "@migration/ProjectTable";
import {GroupConst} from "@const/Model/GroupConst";


export default class Projects extends Model {
    constructor(props = typedModel("project", ProjectSchema)) {
        super(props);
    }

}
