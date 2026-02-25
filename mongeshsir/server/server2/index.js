console.log("okookokook")

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

mongoose.connect("mongodb://127.0.0.1:27017/codinggita")
    .then(() => console.log("MongoDB is connected"))
    .catch(err => console.log(err));


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);


app.post("/user", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send("User created successfully");
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});