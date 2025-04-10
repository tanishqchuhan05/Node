import mongoose from "mongoose";
import { nanoid } from "nanoid";


const userSchema = new mongoose.Schema(
    {
        _id:{
            type: String,
            default: nanoid(5)
        },

        user_full_name: {
            type: String,
            required: true
        },

        user_age:{
            type: Number,
            required: true
        },

        user_address:{
            type: String,
            required: true
        },

        user_phone_number:{
            type: String,
            required: true
        },

        user_email:{
            type: String,
            required: true
        },

        user_status:{
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        }
    },

        {timestamps: true}

);

const User = mongoose.model('User', userSchema);
export default User;