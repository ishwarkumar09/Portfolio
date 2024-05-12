import express from "express";
import connectDB from "./DB/connectDB.js";
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();


connectDB()
.then(()=>{
    app.listen(PORT , ()=>{
        console.log(`server is started on port ${PORT}`)
    })
})

