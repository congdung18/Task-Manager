import mongoose, { Schema, Types }  from "mongoose"
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

    description: {
        type: String
    },

    status: {
        type: String,
        enum: ["pending", "in-progress", "done", "overdue"]
    },

    user: {
        type: Schema.Types.ObjectId,
        default: null
    }
},
    {
        timestamps: true
    }
);

export const TaskModel = mongoose.model<ITask>("Task", TaskSchema);