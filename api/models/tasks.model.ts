import mongoose, { Schema, model }  from "mongoose"
import { ITask } from "../interfaces/model/task.interface"

const TaskSchema = new Schema<ITask>({
    name: {
        type: String,
        required: [true, "Task must have a name"],
        trim: true
    },

    expiry_date: {
        type: Date,
        default: Date.now()
    },

    status: {
        type: String,
        enum: ["pending", "in-progress", "done", "overdue"]
    },

    user: {
        type: String,
        default: null
    }
});

export const Task = mongoose.model<ITask>("Task", TaskSchema);