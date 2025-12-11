const Task = require('../models/tasks.model.js')

class TaskRepositories{
    getAllTasks(filter, sort, skip, limit){
        return Task.find(filter).sort(sort).skip(skip).limit(limit)
    }

    getTotal(filter){
        return Task.countDocuments(filter)
    }

    createTask(body){
        return Task.create(body)
    }

    getTask(filter){
        return Task.findOne(filter)
    }

    updateTask(filter, update){
        return Task.findOneAndUpdate(filter, update, {
            new: true,
            runValidators: true
        })
    }

    deleteTask(filter){
        return Task.findOneAndDelete(filter)
    }

    deleteAllTasks(filter){
        return Task.deleteMany(filter)
    }
}

module.exports = TaskRepositories