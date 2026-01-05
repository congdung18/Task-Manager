export interface TaskFilter{
    status?: "pending" | "in-progress" | "done" | "overdue",
    expiry_date?:{
        $gte?: Date,
        $gt?: Date,
        $lte?: Date
    },
}

export enum Source{
    TASK = "task",
    USER = "user",
    AUTH = "auth"
}