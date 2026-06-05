// import mongoose from "mongoose";
const mongoose = require("mongoose") ;

const doctorSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true 
    },
    salary : {
        type : String , 
        required : true 
    },
    qualification : {
        type : String ,
        required : true 
    },
    experienceInYear : {
        type : Number , 
        default : 0 
    },
    worksInHospitals:{
        type : mongoose.Schema.Types.ObjectId ,
        require : "Hospital"
    }
},{timestemps:true}) ;

export const Doctor = mongoose.model( "Doctor", doctorSchema ) ;








