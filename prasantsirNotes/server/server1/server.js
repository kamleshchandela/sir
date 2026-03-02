const express = require("express") ;



const app = express() ;

app.get("/",(req , res)=>{
    res.send("Hello") ;
})

app.get("/about",(req , res)=>{
    res.send("Hello hello") ;
})


app.listen(3000 , ()=>{
    console.log("server is runing") ;
})




