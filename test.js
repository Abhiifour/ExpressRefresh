
const express = require("express");
const fs = require("fs")
const app = express();
//const parser = require("body-parser");
app.use(express.json());

// Middlewares

const checkName = (req,res,next)=>{
    const name =  req.headers.name
    const pass = req.headers.pass
    if(name != 'Abhishek' || pass != '12345'){
        res.status(404).json({
            msg : 'Invalid inputs'
        })
    }
    next();
}
// Routes
app.get('/',(req,res)=>{
    fs.readFile('a.txt',"utf-8",(err,data)=>{
        
        res.send(data)
    })
    
})

app.post('/route',checkName,(req,res)=>{
    const name = req.headers.name;
    const pass = req.headers.pass;
   // console.log(req)
    res.json({
        name,
        pass
    })
})

app.listen(3000,()=>{
    console.log("listening")
})