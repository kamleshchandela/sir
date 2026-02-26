console.log("okookok")


const express = require ("express") ;
const mongoose = require("mongoose")
const app = express() ;
app.use(express.json())
const port = 3000 ;

mongoose.connect("mongodb://localhost:27017/codinggita")
.then(()=>{console.log("okokokookookoookoookokokoko")})
.catch(()=>{console.log("Error")})

const user = mongoose.Schema()

var user1 = mongoose.model("jobs",user) ;
var user2 = mongoose.model("ecommerce_orders",user) ;


app.get("/",(req , res)=>{
    res.send("Hello world") ;
}) ; 

app.get("/user1",async (req , res)=>{
    const ok = await user1.find() ;
    res.send(ok) ;
}) ; 

app.post("/user1",async (req , res)=>{
    const user1 = new user1(req.body) ;
    await user1.save() ;
    res.status(201).json({
        ok : "okokokkok"
    })
})

app.get("/user2",async (req , res)=>{
    const ok = await user2.find() ;
    res.send(ok) ;
}) ; 







app.listen(port , ()=>{
    console.log("Server is created") ;

}) ;







