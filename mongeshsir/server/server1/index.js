console.log("okok") ;


const express = require('express');
const mongoose = require("mongoose") ;
const app = express();


app.use(express.json()) ;


mongoose.connect("mongodb://localhost:27017/codinggita")
.then(()=>console.log("okokkokokokokookokoo"))
.catch(()=>console.log("colaction is not find"))

const userSchema = new mongoose.Schema({}) ;  // 
const user = mongoose.model("jobs" , userSchema) ;


app.get("/user", async (req, res) => {
  const data = await user.find({}) ;   ///////  .find({"experience": {$gt:1}})
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});



