import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./utils/db.js";

dotenv.config({});

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser)
const corsOptions={
    origin:'http//localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

const PORT= process.env.PORT|| 3001;
app.listen(PORT,()=>{
    connectDb();
    console.log(`Server is running at port ${PORT}`)
})