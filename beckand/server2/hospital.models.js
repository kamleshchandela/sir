// import mongoose from "mongoose";
const mongoose = require("mongoose") ;

const hospitalSchema = new mongoose.Schema({
    name: {
        type : String ,
        required : true
    },
    address1: {
        type : String ,
        required : true
    },
    address2: {
        type : String 
    },
    city : {
        type : String , 
        require : true
    },
    pincode : {
        type : String , 
        require : true
    },
    specializedIn : [
        {
            type:String
        }
    ]
},{timestemps:true})

export const Hospital = mongoose.model( "Hospital", hospitalSchema ) ;








