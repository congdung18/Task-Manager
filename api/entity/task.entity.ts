import { Types } from "mongoose"
import { TaskPriority, TaskStatus } from "../interfaces/model/task.interface";

export class Task{
    _id: Types.ObjectId;
    name: string;
    expiry_date: Date;
    description: string | null;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt: Date;
    updatedAt: Date;
    user: Types.ObjectId | null;
}