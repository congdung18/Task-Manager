import { Document } from 'mongoose'

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
    name: string
    expiry_date: Date
    status: "pending" | "in-progress" | "done" | "overdue"
    user: string | null
}