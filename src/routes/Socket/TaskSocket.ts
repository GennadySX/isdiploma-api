import GroupsController from "@controllers/GroupsController";
import ProjectController from '@controllers/ProjectController';
import TaskController from '@controllers/TaskController';

export default class ProjectSocket {
    socket: any
    ioSocket: any

    constructor(io: any, socket: any) {
        this.ioSocket = io
        this.socket = socket
    }


    public run() {
        this.socket.on('taskCreate', (task: any) => new TaskController().create( task, this.socket));

    }
}
