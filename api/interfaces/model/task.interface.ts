import { Document } from 'mongoose'

export interface ITask extends Document{
    name: string
    expiry_date: Date
    status: "pending" | "in-progress" | "done" | "overdue"
    user: string | null
}