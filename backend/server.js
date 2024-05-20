import path from "path";
import express from "express";
import connectDB from "./DB/connectDB.js";
import dotenv from 'dotenv';
import dataRoutes from "./routes/data.routes.js"
import adminRoutes from "./routes/Admin.routes.js"

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use("/api/portfolio", dataRoutes)
app.use("/api/portfolio/admin", adminRoutes)

app.use(express.static(path.join(__dirname ,"/frontend/dist")))

app.get("" ,(req,res)=>{
  res.sendFile(path.join(__dirname ,"frontend" ,"dist" ,"index.html"))
})


connectDB()
.then(()=>{
    app.listen(PORT , ()=>{
        console.log(`server is started on port ${PORT}`)
    })
})

