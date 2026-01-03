import { Request, Response, NextFunction } from 'express'
import { Forbidden } from '../../errors/authentication_error'

export const authorizeOwner = (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user || !req.user.role || req.user.role !== "owner"){
        next(new Forbidden('Acess denied, owner permission required'))
    }
}