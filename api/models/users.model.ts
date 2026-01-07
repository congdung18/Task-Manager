import mongoose, { Schema, model } from "mongoose"
import bcrypt from "bcryptjs"
import { IUser } from "../interfaces/model/user.interface"

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: [true, 'Must have a username'],
        trim: true,
        unique: true
    },

    email: {
        type: String,
        required: [true, 'Must have an email'],
        trim: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Must have a valid email']
    },

    password: {
        type: String,
        required: [true, 'Must have a password'],
        trim: true,
        minlength: 6,
        select: false
    },

    role: {
        type: String,
        enum: ['user', 'admin', 'owner'],
        default: 'user'
    }
})

UserSchema.pre("save", async function(){
    if (!this.isModified){
        return;
    }

    const salt: string = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.ComparePassword = async function (providedPassword){
    return bcrypt.compare(providedPassword, this.password);
};

export const UserModel = mongoose.model<IUser>("User", UserSchema);