import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { RequestValidationError } from '../../errors/validation_error';
import { Source } from '../../interfaces/query/pagination_interface';

export const validateRequest = (source: Source) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return next(new RequestValidationError(source, errors.array()));
        }

        next();
    }
}