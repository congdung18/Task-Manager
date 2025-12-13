const TaskServiceClass = require('../../services/tasks.service.js')
const TaskServiceInstance = new TaskServiceClass()

class TaskController{
    async getAllTasks(req, res){
        const filter = req.filter || {}
        const sort = req.sort || {}
        const {limit, skip, page} = req.pagination

        const {data, total} = await TaskServiceInstance.getAllTasks(filter, sort, skip, limit)

        return res.status(200).json({total, page, limit, data})
    }

    async createTask(req, res){
        const userID = req.user ? req.user.id : null
        const body = {... req.body, user: userID}

        const {data} = await TaskServiceInstance.createTask(body)

        return res.status(200).json({data})
    }

    async deleteAllTasks(req, res){
        const userID = req.user ? req.user.id : null
        const body = {... req.filter, user: userID}

        const {data} = await TaskServiceInstance.deleteAllTasks(body)

        return res.status(200).json({data})
    }

    async getTask(req, res){
        const taskID = req.params.id
        const userID = req.user ? req.user.id : null
        const filter = {_id: taskID, user: userID}

        const {data} = await TaskServiceInstance.getTask(filter)

        return res.status(200).json({data})
    }

    async updateTask(req, res){
        const taskID = req.params.id
        const userID = req.user ? req.user.id : null
        const filter = {_id: taskID, user: userID}
        const update = req.body || {}

        const {data} = await TaskServiceInstance.updateTask(filter, update)

        return res.status(200).json({data})
    } 

    async deleteTask(req, res){
        const taskID = req.params.id
        const userID = req.user ? req.user.id : null
        const filter = {_id: taskID, user: userID}

        const {data} = await TaskServiceInstance.deleteTask(filter)

        return res.status(200).json({data})
    }
}

module.exports = TaskController