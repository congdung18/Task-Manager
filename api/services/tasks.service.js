const TaskRepositories = require('../repositories/tasks.repositories.js')

class TaskServices{
    async getAllTasks(filter, sort, skip, limit){
        const result = await TaskRepositories.getAllTasks(filter, sort, skip, limit)
        const total = await TaskRepositories.getTotal(filter)

        return {result, total}
    }

    async createTask(body){
        const result = await TaskRepositories.createTask(body)

        return {result}
    }

    async getTask(filter){
        const result = await TaskRepositories.getTask(filter)

        return {result}
    }

    async updateTask(filter, update){
        const result = await TaskRepositories.updateTask(filter, update)

        return {result}
    }

    async deleteTask(filter){
        const result = await TaskRepositories.deleteTask(filter)

        return {result}
    }

    async deleteAllTasks(filter){
        const result = await TaskRepositories.deleteAllTasks(filter)

        return {result}
    }
}

module.exports = new TaskServices()