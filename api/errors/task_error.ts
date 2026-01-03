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
    }
}

function createTaskError(
    message: string,
    statusCode: number,
    errorCode: string
) {
    return class extends TaskError {
        constructor(userID?: string | null) {
            super(message, statusCode, errorCode, userID);
        }
    };
}

export const InvalidExpire = createTaskError(
    "Invalid expiry date",
    400,
    "TASK_INVALID_EXPIRY_DATE"
);

export const InvalidBody = createTaskError(
    "Invalid body field",
    400,
    "TASK_INVALID_BODY_FIELD"
);

export const TaskNotFound = createTaskError(
    "Task not found",
    404,
    "TASK_NOT_FOUND"
);
