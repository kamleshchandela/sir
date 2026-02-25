console.log("okok") ;

const express = require('express');
const mongoose = require("mongoose") ;
const app = express();

app.use(express.json()) ;


mongoose.connect("mongodb://localhost:27017/codinggita") 
.then(()=>{console.log("server is connected")}) 
.catch(()=>{console.log("error")}) ;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
const User = mongoose.model("ecommerce_orders" , userSchema) ;

app.get("/" , async (req , res)=>{
     try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: "Error fetching data" });
    }
})

app.listen(3000 , ()=>{
    console.log("okokookokok") ;
})







