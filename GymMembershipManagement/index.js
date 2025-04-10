import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRoute from "./routes/authRoutes.js"
import packageRoute from './routes/packageRoutes.js'

dotenv.config();
dbConnect();



const app = express();
app.use(express.json());


app.use("/api", authRoute);
app.use("/api", packageRoute)

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}` );
})