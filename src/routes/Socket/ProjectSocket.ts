import GroupsController from "@controllers/GroupsController";
import ProjectController from '@controllers/ProjectController';

export default class ProjectSocket {
    socket: any
    ioSocket: any

    constructor(io: any, socket: any) {
        this.ioSocket = io
        this.socket = socket
    }


    public run() {
        this.socket.on('emit_getProjectList', () => new ProjectController().init( this.socket));

        this.socket.on('emit_createProject', (project: any) => new ProjectController().create( project, this.socket));
    }
}
