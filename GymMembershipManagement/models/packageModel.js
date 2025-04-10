import mongoose from "mongoose";
import { nanoid } from "nanoid";

const packageSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: nanoid(5)
        },

        package_type:{
            type: String,
            enum: ["1 Month", "3 Month", "6 Month", "12 Month"],
            default: "1 Month"
        },

        package_price:{
            type: Number,
            required: true
        },

        package_duration:{
            type: Number,
             required: true
        },

        package_discount:{
            type: Number,
            // required: true
        },

        package_final_price:{
            type: Number,
            // required: true
        }
},
    {timestamps: true}
    
)

const Package = mongoose.model('Package', packageSchema);
export default Package;