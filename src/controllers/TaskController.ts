/**
 * Created by GennadySX on @2020
 */
import Controller from "@controllers/Controller";
import Tasks from '@models/Tasks';

export default class ProjectController extends Controller {
    constructor() {
        super(new Tasks());
    }



    public async list(socket:any): Promise<void> {
        await super.getAll((data:any) => {
            console.log('task list data', data)
            socket.emit('taskList', data)
        })
    }
   public async moved(task:any, type:any, socket:any): Promise<void> {
        await super.updateBy(task,{type: type}, (data:any) => {
            console.log('task moved data', data)
            socket.emit('on_taskMoved_confirm', data)
        })
    }
    public async del(task:any,  socket:any): Promise<void> {
        await super.delete(task,(data:any) => {
            console.log('task deleted data', data)
            socket.emit('on_taskDelete_confirm', data)
        })
    }


     public async create(task: any, socket: any): Promise<void> {
       await super.create(task, (data: any) => {
           console.log('task is ', task)
           console.log('task created ', data)
                data && data.data ? socket.emit('taskCreated', data.data) : socket.emit('taskCreated', data)
       })
    }




}