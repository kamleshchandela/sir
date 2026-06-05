const express = require("express") 
const mongoose = require("mongoose")

const app = express() ; 
app.use(express.json()) 
const port = 5000 ; 

mongoose.connect("mongodb://127.0.0.1:27017/backendClassDB") 
.then(()=>{
    console.log("okoko")
})
.catch(()=>{
    console.log("nonononononoononon")
})


const productSchema = new mongoose.schema({
    title : {
        type : String , 
        require : true 
    }
})


