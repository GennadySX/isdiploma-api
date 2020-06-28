/**
 * Created by GennadySX on @2020
 */
import Controller from "@controllers/Controller";
import Projects from '@models/Projects';

export default class ProjectController extends Controller {
    constructor() {
        super(new Projects());
    }


    public init(socket:any) {
        super.getAll((projects: any) => {
            console.log('project list', projects)
            socket.emit('getProjectList', projects);
        })
    }

     public async create(project: any, socket: any): Promise<void> {
       await super.create(project, (data: any) => {
                console.log('created project', data);
                data && data.data ? socket.emit('createProject', data.data) : socket.emit('createProject', data)
       })
    }


}