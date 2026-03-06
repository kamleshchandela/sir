const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

/* MongoDB Connection */
mongoose.connect("mongodb+srv://kamlesh:kamlesh123@cluster0.8pxa26e.mongodb.net/codinggita?retryWrites=true&w=majority")
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err));

/* Schema */
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    }
});

const User = mongoose.model("user",userSchema);


//  GET ALL USERS
app.get("/users", async(req,res)=>{
    const users = await User.find();
    res.json(users);
});


// GET USER BY ID
app.get("/users/:id", async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
});


//  POST ONE USER
app.post("/user", async(req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.json(user);
});


//  POST MULTIPLE USERS
app.post("/users", async(req,res)=>{
    const users = await User.insertMany(req.body);
    res.json(users);
});


//  DELETE USER
app.delete("/users/:id", async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({message:"User Deleted"});
});


// PUT (FULL UPDATE)
app.put("/users/:id", async(req,res)=>{
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(user);
});


//  PATCH (PARTIAL UPDATE)
app.patch("/users/:id", async(req,res)=>{
    const user = await User.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
    );
    res.json(user);
});


app.listen(3000,()=>{
    console.log("Server running on port 3000");
});