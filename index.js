const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();


app.get("/home",(req, res)=>{
    res.json({message: 'OK'})
})

app.get("/about", (req, res)=>{
    res.json({message:"About us "})
})
app.listen(process.env.PORT, ()=>{
    console.log("Server is started!");
})