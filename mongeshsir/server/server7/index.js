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



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const express = require("express");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const app = express();
// app.use(express.json());

// /* ================== DB CONNECT ================== */
// mongoose.connect("mongodb+srv://practice:practice123@cluster0.8pxa26e.mongodb.net/practice")
// .then(() => console.log("✅ MongoDB Connected"))
// .catch(() => console.log("❌ MongoDB Not Connected"));

// /* ================== SCHEMA ================== */
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// const User = mongoose.model("User", userSchema);

// /* ================== REGISTER ================== */
// app.post("/register", async (req, res) => {
//     try {
//         const { name, age, email, password } = req.body;

//         // check existing user
//         const exist = await User.findOne({ email });
//         if (exist) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new User({
//             name,
//             age,
//             email,
//             password: hashedPassword
//         });

//         await user.save();

//         res.status(201).json({
//             message: "User registered successfully"
//         });

//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// /* ================== LOGIN ================== */
// app.post("/login", async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: "User not found" });
//         }

//         // compare password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid password" });
//         }

//         // create token
//         const token = jwt.sign(
//             { id: user._id, email: user.email },
//             "secretkey123",
//             { expiresIn: "1h" }
//         );

//         res.status(200).json({
//             message: "Login successful",
//             token
//         });

//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// /* ================== MIDDLEWARE ================== */
// const authMiddleware = (req, res, next) => {
//     const token = req.headers.authorization;

//     if (!token) {
//         return res.status(401).json({ message: "No token provided" });
//     }

//     try {
//         const decoded = jwt.verify(token, "secretkey123");
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(401).json({ message: "Invalid token" });
//     }
// };

// /* ================== PROTECTED ROUTE ================== */
// app.get("/profile", authMiddleware, async (req, res) => {
//     res.json({
//         message: "Protected data",
//         user: req.user
//     });
// });

// /* ================== ALL USERS ================== */
// app.get("/", async (req, res) => {
//     const users = await User.find();
//     res.json(users);
// });

// /* ================== SERVER ================== */
// app.listen(3000, () => {
//     console.log("🚀 Server running on port 3000");
// });