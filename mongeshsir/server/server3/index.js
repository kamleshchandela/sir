// console.log("okookok")


// const express = require ("express") ;
// const mongoose = require("mongoose")
// const app = express() ;
// app.use(express.json())
// const port = 3000 ;

// mongoose.connect("mongodb://localhost:27017/codinggita")
// .then(()=>{console.log("okokokookookoookoookokokoko")})
// .catch(()=>{console.log("Error")})

// const user = mongoose.Schema()

// var user1 = mongoose.model("jobs",user) ;
// var user2 = mongoose.model("ecommerce_orders",user) ;


// app.get("/",(req , res)=>{
//     res.send("Hello world") ;
// }) ; 

// app.get("/user1",async (req , res)=>{
//     const ok = await user1.find() ;
//     res.send(ok) ;
// }) ; 

// app.post("/user1",async (req , res)=>{
//     const user1 = new user1(req.body) ;
//     await user1.save() ;
//     res.status(201).json({
//         ok : "okokokkok"
//     })
// })

// app.get("/user2",async (req , res)=>{
//     const ok = await user2.find() ;
//     res.send(ok) ;
// }) ; 







// app.listen(port , ()=>{
//     console.log("Server is created") ;

// }) ;



const express = require("express");
const mongoose = require("mongoose")
const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/flipkart")
    .then(() => console.log("MongoDB connected Succesfully"))
        .catch((error) => console.log("Mongodb error ", error))
const userSchema = new mongoose.Schema({
        name: String,
    age: Number,
    email: String
},{
    versionKey : false
});
const User = mongoose.model("users", userSchema);
const classSchema = new mongoose.Schema({
        name: String,
    age: Number,
    email: String
});
const Class = mongoose.model("class", classSchema);
const orderSchema = new mongoose.Schema({});
const Orders = mongoose.model("orders", orderSchema);
app.get("/", (req, res) => {
    res.status(200).send("server has been started")
})

app.get("/user",async (req, res) => {
    try{
        const data = await User.find({});

        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({error : error.message})
    }
})
app.get("/get-user/:id",async (req, res) => {
    try{
        
        const data = await User.findById(req.params.id);

        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({error : error.message})
    }
})
app.get("/class",async (req, res) => {
    try{
        const data = await Class.find({});

        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({error : error.message})
    }
})
app.post("/user", async (req, res) => {
    try {

        const user = new User(req.body);
        await user.save()
        res.status(201).json(user);
    }
    catch (error) {
        console.log(error);    
        res.status(500).json({ error: error.message });
    }
});

app.post("/class", async (req, res) => {
    try {

        const class1 = new Class(req.body);
        await class1.save();

        res.status(201).json(class1);
    }
    catch (error) {
        console.log(error);    
        res.status(500).json({ error: error.message });
    }
});
app.post("/classMultiple", async (req, res) => {
    try {

        const class1 = await Class.insertMany(req.body);
        // await class1.save();

        res.status(201).json(class1);
    }
    catch (error) {
        console.log(error);    
        res.status(500).json({ error: error.message });
    }
});
app.get("/orders",async (req, res) => {
    try{
        const data = await Orders.find({});

        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({error : error.message})
    }
})
app.listen(3001, () => {

    console.log("server  Started");
})



