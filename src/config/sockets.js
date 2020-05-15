import siofu from "socketio-file-upload"
import md5 from 'js-md5'
import fs from 'fs'

let socketUploder = new siofu();

class SocketConfig {
    constructor(port) {
        this.state = {
            port: port,
            uploadDir: './uploads/'
        }


    }


    socketFileUploader(socket) {
        socketUploder.listen(socket);
        socketUploder.dir = './uploads';
        socketUploder.on("start", async (event) => {
            event.file.name = md5(event.file.name + new Date().toString()) + '.' + event.file.name.toString().split('.').pop()
            console.log(event.file.name);
        });
    }


    fileSave(file, status) {

        let data = file.uri
        let buf = new Buffer(data, 'base64');
        const filename = this.state.uploadDir + md5(file.filename + new Date().toString()) + '.' + file.filename.toString().split('.').pop()

        fs.writeFile(filename, buf, status);


    }


}


export {
    SocketConfig
}
