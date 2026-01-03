import { Request, Response, NextFunction } from 'express'
import { Forbidden } from '../../errors/authentication_error';

export const authorizeJWT = (roles: String[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        if (!req.user || !req.user.role || !roles.includes(req.user.role)){
            const requiredRoles = roles.join(', ');
            return next(new Forbidden(`Access denied, roles required are ${requiredRoles}`));
        }
    }
}