import { Document, Types } from "mongoose"

export enum UserRole{
    USER = "user",
    ADMIN = "admin",
    OWNER = "owner"
}

export interface IUser extends Document{
    _id: Types.ObjectId
    username: string
    email: string
    password: string
    role: UserRole
    createdAt: Date
    updatedAt: Date
}