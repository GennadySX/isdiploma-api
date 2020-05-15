let table;

export default class Model {
    constructor(modelTable = Object) {
        table = modelTable
    }

    table() {
        return table
    }

    all(callback) {
        table.find({}, callback)
    }

    find(where, callback) {
        table.find(where, callback)
    }

    create(data, callback) {
        const newRoom = new table(data);
        newRoom.save(callback);
    };

    findOne(data, callback) {
        table.findOne(data, callback);
    }

    findById(id, callback) {
        table.findById(id, callback);
    }

    delete(data, callback) {
        table.findOneAndDelete(data, callback);
    }

    updateBy(by, data, callback) {
        table.findOneAndUpdate(by, data, {new: true}, callback);
    }

    update(by, data, callback) {
        table.update(by, data, callback);
    }

    updateById(ID, data, callback) {
        table.findByIdAndUpdate(ID, data, {new: true}, callback);
    }

}
