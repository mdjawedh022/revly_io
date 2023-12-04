const express=require("express");
const {connection}=require("./utils/db")
require('dotenv').config();
const cors = require("cors");
const { authRouter } = require("./routes/auth.routes");
const app=express();


app.get("/",(req,res)=>{
    res.send("welcome to Revly.io server 😊!")
})
app.use(express.json());
app.use("/user",authRouter)

app.listen(process.env.port,async()=>{
    try{
        await connection 
        console.log("connnected to the Database!");

    }catch(err){
        console.log("Database connection failed!");
    }
            console.log(`server is running at the port ${process.env.port}`);
})
