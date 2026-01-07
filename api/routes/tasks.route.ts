import { Router } from 'express'
const router: Router = Router();

import { authenticateJWT } from '../middlewares/authentication/authentication.middleware'
import { queryBuilder } from '../middlewares/query/query'
import { validateRequest } from '../middlewares/validator/validate_request'

import { requestBody } from '../validators/request_body'

import { TaskController } from '../controllers/tasks/tasks.controller'

const TaskControllerInstance = new TaskController()

router.use(authenticateJWT);
router.route('/').get(queryBuilder, TaskControllerInstance.getAllTasks)
                 .post(requestBody, validateRequest, TaskControllerInstance.createTask)
                 .delete(queryBuilder, TaskControllerInstance.deleteAllTasks);

router.route('/:id').get(TaskControllerInstance.getTask)
                    .patch(TaskControllerInstance.updateTask)
                    .delete(TaskControllerInstance.deleteTask);

export default router;