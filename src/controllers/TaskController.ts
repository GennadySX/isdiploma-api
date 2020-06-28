/**
 * Created by GennadySX on @2020
 */
import Controller from "@controllers/Controller";
import Tasks from '@models/Tasks';

export default class ProjectController extends Controller {
    constructor() {
        super(new Tasks());
    }


     public async create(task: any, socket: any): Promise<void> {
       await super.create(task, (data: any) => {
           console.log('task is ', task)
           console.log('task created ', data)
                data && data.data ? socket.emit('taskCreated', data.data) : socket.emit('taskCreated', data)
       })
    }

}