import mongoose from "mongoose";


const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        
    }catch(err){
        throw err;
    }

}

export default dbConnect