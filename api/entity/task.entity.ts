import { TaskPriority, TaskStatus } from "../interfaces/model/task.interface";

export class Task{
    id: string;
    name: string;
    expiry_date: Date;
    description: string | null;
    status: TaskStatus;
    priority: TaskPriority;
    createdAt: Date
}