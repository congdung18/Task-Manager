import { Request, Response, NextFunction } from 'express'
import { Forbidden, MissingToken } from '../../errors/authentication_error'

export const requireLogin = (req: Request, res: Response, next: NextFunction): void => {
    if (!req.user){
        return next(new MissingToken("Access denied, please log in to continue"));
    }

    if (!req.user.role){
        return next(new Forbidden("Access denied, every user must have a role"));
    }

    next();
}