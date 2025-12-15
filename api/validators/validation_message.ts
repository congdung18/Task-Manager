interface ValidationMessage{
    errorCode: string,
    message: string
}

export function createMessage(msg: string): ValidationMessage{
    return {
        errorCode: "AUTH_INVALID_CREDENTIALS",
        message: msg
    }
}