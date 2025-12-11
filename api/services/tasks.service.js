const TaskRepositoriesInstanceClass = require('../repositories/tasks.repositories.js')
const TaskRepositoriesInstance = new TaskRepositoriesInstanceClass()

class TaskServices{
    async getAllTasks(filter, sort, skip, limit){
        const data = await TaskRepositoriesInstance.getAllTasks(filter, sort, skip, limit)
        const total = await TaskRepositoriesInstance.getTotal(filter)

        return {data, total}
    }

    async createTask(body){
        const data = await TaskRepositoriesInstance.createTask(body)

        return {data}
    }

    async getTask(filter){
        const data = await TaskRepositoriesInstance.getTask(filter)

        return {data}
    }

    async updateTask(filter, update){
        const data = await TaskRepositoriesInstance.updateTask(filter, update)

        return {data}
    }

    async deleteTask(filter){
        const data = await TaskRepositoriesInstance.deleteTask(filter)

        return {data}
    }

    async deleteAllTasks(filter){
        const data = await TaskRepositoriesInstance.deleteAllTasks(filter)

        return {data}
    }
}

module.exports = TaskServices