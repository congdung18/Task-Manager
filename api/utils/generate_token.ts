import jwt, {SignOptions} from "jsonwebtoken"

interface UserPayload{
    _id: String,
    username: String,
    role: String
}

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string

export const generateAccessToken = (user: UserPayload): string => {
    const payload = {
        id: user._id,
        username: user.username,
        role: user.role
    }

    const options: SignOptions = {
        expiresIn: "15m"
    }

    return jwt.sign(payload, JWT_SECRET_KEY, options)
}

export const generateRefreshToken = (user: Pick<UserPayload, "_id">): string => {
    const payload = {
        id: user._id
    }

    const options: SignOptions = {
        expiresIn: "7d"
    }

    return jwt.sign(payload, JWT_SECRET_KEY, options)
}