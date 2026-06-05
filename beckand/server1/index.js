var express = require('express') ;
const mongoose = require("mongoose") ;
const userSchema = new mongoose.Schema({})
const user = mongoose.model("Tests",userSchema) ;
var app = express() ;
// index.js
require('dotenv').config()
// or import 'dotenv/config' // for esm

console.log(`Hello ${process.env.PORT}`)

 
app.get("/" , (req , res)=>{
    console.log("llll") ;
    res.send("<del>okokokok</del>") ;
})

app.get("/ok" , (req , res)=>{
    res.send({"thkhe" : "kmkm","ok" : "okokok"})
})

app.listen(process.env.PORT , ()=>{
    console.log("kamlesh") ;
})

















