import {CustomAPIError} from "./custom_error"

export abstract class TaskErrors extends CustomAPIError{
    public readonly userID: string | null

    constructor(message: string, statusCode: number, errorCode: string, userID?: string | null){
        super(message, statusCode, errorCode)

        this.userID = userID ?? null

        Object.setPrototypeOf(this, new.target.prototype)
    }
}

export class InvalidExpire extends TaskErrors{
    constructor(message: string = 'Invalid expiry date', userID?: string | null){
        super(message, 401, "TASK_INVALID_EXPIRY_DATE", userID)
        this.name = "InvalidExpire"
    }
}

export class InvalidBody extends TaskErrors{
    constructor(message: string = 'Invalid body field', userID?: string | null){
        super(message, 401, "TASK_INVALID_BODY_FIELD", userID)
        this.name = "InvalidBody"
    }
}

export class TaskNotFound extends TaskErrors{
    constructor(message: string = 'Task not found', userID?: string | null){
        super(message, 404, "TASK_NOT_FOUND", userID)
        this.name = "TaskNotFound"
    }
}