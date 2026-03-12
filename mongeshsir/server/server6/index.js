// (1) npm i express

// (2) .gitignore --> node_modules

// (3) req.body
// Client ने body में क्या data भेजा है।
// लेकिन इसके लिए middleware चाहिए:
// ye post rout ke badse use me aata he kyu ki hame data ko request se dhund na padta he
// -------------------------------------------
// app.use(express.json());
// -------------------------------------------
// Example:
// app.post("/login", (req, res) => {
//   console.log(req.body);
//   res.json({
//     message: "Data received"
//   });
// });
// Request body:
// {
//  "email":"test@gmail.com",
//  "password":"123456"
// }
// Console:
// { email: 'test@gmail.com', password: '123456' }

// (4) req.params
// URL parameters के लिए।
// Example route:
// app.get("/user/:id", (req, res) => {
//   console.log(req.params);
//   res.json({
//     userId: req.params.id
//   });
// });
// Request:
// /user/25
// Result:
// req.params = { id: "25" }
// Response:
// {
//  "userId":"25"
// }

// (4) npm i mongoose 
// mongodb ko connect karneke liye ise install karege
// ---------------
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/codinggita')
//   .then(() => console.log('Connected!'));
// const userSchema = new mongoose.Schema()
// const users1 = mongoose.model("jobs" , userSchema)


const express = require('express') ;
const app = express() ;
app.use(express.json())


// ------------------------------------------------------------------------
// mongodb connect karne ke liye 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kamleshchandela:kamlesh1234@cluster0.8pxa26e.mongodb.net/codinggita?appName=Cluster0')
  .then(() => console.log('Connected!'));
const userSchema = new mongoose.Schema({
    name : {type : String , required : true} ,
    role : {type : String , required : true} ,
    data : {type : Date , default : Date.now } ,
    // check : {type : String , default : "okok"}

    
})
const users1 = mongoose.model("user" , userSchema)
// ------------------------------------------------------------------------



// console.log(express()) ;
const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" }
];

app.get("/" , (req , res)=>{ 
    res.status(200).send({
        data : users
    })
})


// ------------------------------------------------------------------------
app.get("/mongo" , async(req , res)=>{
    let users = await users1.find() ;
    res.send(users) ;
})
// ------------------------------------------------------------------------


// ------------------------------------------------------------------------
app.post("/mongo" , async(req , res)=>{
    let users = new users1(req.body) ;
    await users.save() ;
    res.send(users) ;
})
// ------------------------------------------------------------------------


app.get("/:id" , (req , res)=>{
    let id = req.params.id ;
    console.log(id) ;

    let ans = users.filter((e)=>e.id == id) ;

    if(ans.length == 0){
        res.send({
            ans : "it is not found id is 1 to 2" 
        })
    }

    res.status(200).json({
        res : ans  
    })
})

app.post("/add" , (req , res)=>{
    try {
    console.log(req.body) ;
    let add = {
        id : users.length + 1 ,
        name : req.body.name ,
        role : req.body.role
    } ;
    users.push(add) ;
    res.status(201).send({
        status : true ,
        message : add 
    })
}
catch{
    res.send({
        status : false ,
        message : "not dound"
    })
}
})

app.put("/add/:id" , (req , res)=>{
    try {
       console.log(req.body)
        let id = req.params.id ;
        if(id < 1 || id > users.length){
            return res.status(400).json({
                status : false ,
                message : "user is not found"
            })
        }
        users[id-1] = {
            id: id ,
            name: req.body.name,
            role: req.body.role 
            }

        res.status(202).json({
            status : true ,
            message : users[id - 1]  
        }) 
    }
    catch{
        res.status(500).json({
            status : 500 ,
            message : "server error"
        })
    }
    
    
    
})


app.patch("/add/name/:id" , (req , res)=>{
    try {
    let id = req.params.id ;
    console.log(req.params) ;
    if(req.body.name)users[id - 1].name = req.body.name ;
    if(req.body.role)users[id - 1].role = req.body.role ;
    res.status(200).json({
        status : true ,
        message : users[id - 1]
    })
    }
    catch{
        res.status(400).send({
            status : false ,
            message : "somthing is wrong from server side"


        })
    }
})

app.delete("/delete/:id" , (req , res)=>{
    let id = req.params.id ;
    let index = users.findIndex((e)=>e.id == id) ;
    if(index == -1){
        return res.send({
        status : 400 ,
        message : "not found"
    })
    }
    users.splice(index , 1) ;
    res.send({
        status : 200 ,
        message : users
    })
})


app.listen(3000 , ()=>{
    console.log("server is runing on 3000")
})
