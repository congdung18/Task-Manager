const express = require('express')
const router = express.Router()

const authenticateJWT = require('../middlewares/authentication/authentication.middleware.js')
const queryBuilder = require('../middlewares/query/query.js')
const validateRequest = require('../middlewares/validator/validate_request.js')

const requestBody = require('../validators/request_body.js')

const TaskControllerClass = require('../controllers/tasks/tasks.controller.js')
const TaskControllerInstance = new TaskControllerClass()

router.use(authenticateJWT)
router.route('/').get(queryBuilder, TaskControllerInstance.getAllTasks).post(requestBody, validateRequest, TaskControllerInstance.createTask).delete(queryBuilder, TaskControllerInstance.deleteAllTasks)
router.route('/:id').get(TaskControllerInstance.getTask).patch(TaskControllerInstance.updateTask).delete(TaskControllerInstance.deleteTask)

module.exports = router
