const express = require("express") ;
const app = express() ;
const mongoose = require("mongoose") ; 
app.use(express.json())

mongoose.connect("mongodb+srv://practice:practice123@cluster0.8pxa26e.mongodb.net/practice?appName=Cluster0")
.then(()=>console.log("connect"))
.catch(()=>console.log("not connect"))

const user = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    } ,
    age : {
        type : Number ,
        required : true
    } ,
    email : {
        type : String ,
        required : true
    }
}) ;

const User = mongoose.model("array",user) ;

app.get("/",async (req,res)=>{
    console.log(req.query)
        let ok = await User.find() ;
        res.status(200).json({
            message : ok ,
        }) ; 
})

app.post("/",async (req,res)=>{
    let ok = new User({
        name : req.body.name ,
        age : req.body.age ,
        email : req.body.email
    },
    {
        versionKey : false 
    }
    ) ;
    await ok.save() ;

    res.status(201).json({
        message : ok 
    })

})





app.listen(3000,()=>{
    console.log("server is start") ;
})














