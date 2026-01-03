import { Source } from "../interfaces/query/pagination_interface";
import { CustomAPIError } from "./custom_error";
import { ValidationError } from "express-validator";

export abstract class CustomValidationError extends CustomAPIError{
    public readonly source: Source

    constructor(message: string, statusCode: number, errorCode: string, source: Source){
        super(message, statusCode, errorCode);
        this.source = source;
    }
}

export class RequestValidationError extends CustomValidationError{
    public readonly errors: ValidationError[]

    constructor(source: Source, error: ValidationError[]){
        super("Request is invalid", 400, "VALIDATION_REQUEST_ERROR", source);
        this.errors = error;
    }
}

function createCustomValidationError(
    message: string,
    statusCode: number,
    errorCode: string
){
    return class extends CustomValidationError{
        constructor(source: Source){
            super(message, statusCode, errorCode, source);
        }
    }
}

export const QueryError = createCustomValidationError(
    "Query is invalid",
    400,
    "VALIDATION_QUERY_ERROR"
);
