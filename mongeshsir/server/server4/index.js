const express  = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json()); 

mongoose.connect("mongodb://localhost:27017/day5lab2")
.then(()=> console.log("database connected successfully"))
.catch((err)=> console.log(err))

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
});

const User = mongoose.model("day", userSchema);

app.get("/users", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post("/addUsers", async (req,res)=>{
    try{
       const user = new User(req.body); 
       await user.save();
       res.send("User created successfully");
    }
    catch(error){
        res.status(500).json({ error: error.message});
    }
});

app.post("/addMultiUsers", async (req, res) => {
    try {
        const users = await User.insertMany(req.body);
        res.status(201).json({
            message: "Users created successfully",
            data: users
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000,()=>{
    console.log("server is running successfully");
});