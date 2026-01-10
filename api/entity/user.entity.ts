import { Types } from "mongoose"
import { UserRole } from "../interfaces/model/user.interface";

export class User{
    _id: Types.ObjectId;
    username: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date
}