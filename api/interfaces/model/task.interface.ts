import { Document, Types } from 'mongoose'

export enum TaskStatus {
    PENDING = "pending",
    IN_PROGRESS = "in-progress",
    DONE = "done",
    OVERDUE = "overdue",
}

export enum TaskPriority {
    EMERGENCY = "emergency",
    HIGH = "high",
    MEDIUM = "medium",
    LOW = "low",
}

export interface ITask extends Document{
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