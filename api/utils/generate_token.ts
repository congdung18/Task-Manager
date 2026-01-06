import jwt, { SignOptions } from "jsonwebtoken"
import { UserPayload } from '../interfaces/auth/user_payload'

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string

export const generateAccessToken = (user: UserPayload): string => {
    const options: SignOptions = {
        expiresIn: "15m"
    }

    return jwt.sign(user, JWT_SECRET_KEY, options)
}

export const generateRefreshToken = (user: Pick<UserPayload, "id">): string => {
    const options: SignOptions = {
        expiresIn: "7d"
    }

    return jwt.sign(user, JWT_SECRET_KEY, options)
}