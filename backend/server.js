import express from "express";
import connectDB from "./DB/connectDB.js";
import dotenv from 'dotenv';
import dataRoutes from "./routes/data.routes.js"

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/portfolio", dataRoutes)



connectDB()
.then(()=>{
    app.listen(PORT , ()=>{
        console.log(`server is started on port ${PORT}`)
    })
})

