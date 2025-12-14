import { CustomAPIError } from "./custom_error";

export abstract class TaskError extends CustomAPIError {
    public readonly userID: string | null;

    constructor(
        message: string,
        statusCode: number,
        errorCode: string,
        userID?: string | null
    ) {
        super(message, statusCode, errorCode);
        this.userID = userID ?? null;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

function createTaskError(
    name: string,
    defaultMessage: string,
    statusCode: number,
    errorCode: string
) {
    return class extends TaskError {
        constructor(message: string = defaultMessage, userID?: string | null) {
            super(message, statusCode, errorCode, userID);
            this.name = name;
        }
    };
}

export const InvalidExpire = createTaskError(
    "InvalidExpire",
    "Invalid expiry date",
    400,
    "TASK_INVALID_EXPIRY_DATE"
);

export const InvalidBody = createTaskError(
    "InvalidBody",
    "Invalid body field",
    400,
    "TASK_INVALID_BODY_FIELD"
);

export const TaskNotFound = createTaskError(
    "TaskNotFound",
    "Task not found",
    404,
    "TASK_NOT_FOUND"
);
