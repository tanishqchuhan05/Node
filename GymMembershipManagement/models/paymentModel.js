import mongoose from "mongoose";
import { nanoid } from "nanoid";


const paymentSchema = new mongoose.Schema(
    {
        _id:{
            type: String,
            default: nanoid(5)
        },

        user_id:{
            type: String,
            required: true,
            ref: "User"
        },

        package_id:{
            type: String,
            required: true,
            ref: "Package"
        },

        payment_status:{
            type: String,
            enum: ["Pending", "Success", "Failed"],
            default: "Pending"
        },

        payment_method:{
            type: String,
            default: "Card"
        },

        payment_join_date:{
            type: Date,
            default: null
        },

        payment_due_date: {
            type: Date,
            default: null
        },

        payment_total_amount: {
            type: Number,
            required: true
        }
    },
    {timestamps: true}
)


const Payment = mongoose.models('Payment', paymentSchema);
export default Payment