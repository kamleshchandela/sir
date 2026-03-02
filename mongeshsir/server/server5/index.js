console.log("okokkokkko") ;

const express = require("express") ;
const mongoose = require("mongoose") ;
const app = express() ;
app.use(express.json()) ;


mongoose.connect("mongodb://localhost:27017/codinggita")
.then(()=>console.log("server is connect"))
.catch(()=>console.log("Error"))


const userData = new mongoose.Schema({
    name: String,
    email: String,
    job: String
})

const Data = mongoose.model("jobs" , userData)


app.get("/",async (req , res)=>{
    let data = await Data.find({})
    res.send(data);
})

app.post("/postone",async (req , res)=>{
    const add1 = new Data(req.body);
        await add1.save();  // save single document
        res.json({ message: "Data saved successfully" });

})

app.post("/postmany",async (req , res)=>{
    const add1 = await Data.insertMany(req.body);  // save single document
        res.json({ message: "Data saved successfully" });

})


app.listen(3000 , ()=>{
    console.log("swerver is connect")
})










