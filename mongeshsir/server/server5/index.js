const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://aryan_sabasana_cg:aryan_0612@aryanpatel.m0yqr3f.mongodb.net/")
  .then(() => console.log("MongoDb Connected Successfully"))
  .catch((error) => console.log("MongoDb connection Failed", error));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength:[2,"Name Must be atleas 2 character"] 
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password Must be there"],
    minlength:[6,"Password Must be 6 character."],
  },
  role:{
    type: String,
    enum: ["Student","Mentor","Admin"],
    default:"Mentor"
  }
},{
  versionKey: false
});

const User = mongoose.model("User", userSchema);

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Hello" , version: "1.0.0" });
});

app.get("/allusers", async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    // Validate if ID is provided
    if (!req.params.id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    
    const data = await User.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post("/adduser", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    
    // Validate email is provided
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }
    
    // Validate password is provided
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }
    
    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }
    
    // Validate name if provided
    if (name && name.length < 2) {
      return res.status(400).json({ error: "Name must be at least 2 characters" });
    }
    
    // Validate role if provided
    const validRoles = ["Student", "Mentor", "Admin"];
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({ error: "Role must be one of: Student, Mentor, Admin" });
    }
    
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/addusers", async (req, res) => {
  try {
    // Validate if body is an array
    if (!Array.isArray(req.body)) {
      return res.status(400).json({ error: "Request body must be an array of users" });
    }
    
    // Validate if array is not empty
    if (req.body.length === 0) {
      return res.status(400).json({ error: "At least one user must be provided" });
    }
    
    const validRoles = ["Student", "Mentor", "Admin"];
    
    // Validate each user in the array
    for (let i = 0; i < req.body.length; i++) {
      const { name, email, password, role } = req.body[i];
      
      if (!email) {
        return res.status(400).json({ error: `User ${i + 1}: Email is required` });
      }
      
      if (!password) {
        return res.status(400).json({ error: `User ${i + 1}: Password is required` });
      }
      
      if (password.length < 6) {
        return res.status(400).json({ error: `User ${i + 1}: Password must be at least 6 characters` });
      }
      
      if (name && name.length < 2) {
        return res.status(400).json({ error: `User ${i + 1}: Name must be at least 2 characters` });
      }
      
      if (role && !validRoles.includes(role)) {
        return res.status(400).json({ error: `User ${i + 1}: Role must be one of: Student, Mentor, Admin` });
      }
    }
    
    const users = await User.insertMany(req.body);
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put("/updateuser/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Validate if ID is provided
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    
    // Validate if request body is not empty
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "At least one field must be provided to update" });
    }
    
    const { name, email, password, role } = req.body;
    const validRoles = ["Student", "Mentor", "Admin"];
    
    // Validate password if provided
    if (password && password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }
    
    // Validate name if provided
    if (name && name.length < 2) {
      return res.status(400).json({ error: "Name must be at least 2 characters" });
    }
    
    // Validate role if provided
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({ error: "Role must be one of: Student, Mentor, Admin" });
    }
    
    const updateUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.patch("/updateuser/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Validate if ID is provided
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    
    // Validate if request body is not empty
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "At least one field must be provided to update" });
    }
    
    const { name, email, password, role } = req.body;
    const validRoles = ["Student", "Mentor", "Admin"];
    
    // Validate password if provided
    if (password && password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }
    
    // Validate name if provided
    if (name && name.length < 2) {
      return res.status(400).json({ error: "Name must be at least 2 characters" });
    }
    
    // Validate role if provided
    if (role && !validRoles.includes(role)) {
      return res.status(400).json({ error: "Role must be one of: Student, Mentor, Admin" });
    }
    
    const updateUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/deleteuser/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Validate if ID is provided
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});