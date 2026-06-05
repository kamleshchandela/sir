// import mongoose from "mongoose";
const mongoose = require("mongoose") ;

const patientSchema = new mongoose.Schema({
    name: {
        type : String ,
        required : true 
    },
    diagonsedWith : {
        type : String ,
        required : true 
    },
    address : {
        type : String ,
        required : true 
    },
    age : {
        type : Number ,
        required : true 
    },
    bloodGroup : {
        type : Number ,
        required : true 
    },
    gender: {
        type : String ,
        enum : ["M" , "F" , "O"] ,
        required : true
    },
    admittedIn : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Hospital"
    }
},{timestemps:true})

export const Patient = mongoose.model( "Patient", patientSchema ) ;








