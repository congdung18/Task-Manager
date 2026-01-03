import jwt, { TokenExpiredError, JsonWebTokenError} from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import logger from '../../utils/logger'
import { UserPayload } from '../../interfaces/auth/user_payload';
import { InvalidToken, ExpiredToken } from '../../errors/authentication_error';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

if (!JWT_SECRET_KEY){
    throw new Error("JWT_SECRET_KEY is not set in .env")
}

export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    logger.info(`AUTHORIZATION HEADER: ${req.headers.authorization}`);

    const authHead: string = req.headers.authorization;
    if (!authHead){
        req.user = null;
        return next();
    }

    const parts: string[] = authHead.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer"){
        req.user = null;
        return next();
    }

    const token = parts[1];

    if (!token){
        req.user = null;
        return next();
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY) as UserPayload;
        req.user = {... decoded};
        next();
    } catch (error) {
        if (error instanceof TokenExpiredError){
            return next(new ExpiredToken("JWT Authentication token expired"));
        }

        if (error instanceof JsonWebTokenError){
            return next(new InvalidToken("JWT Authentication token is invalid or edited"));
        }

        return next(new InvalidToken());
    }
}