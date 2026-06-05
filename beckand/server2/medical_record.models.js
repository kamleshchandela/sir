// import mongoose from "mongoose";
const mongoose = require("mongoose") ;

const medicalRecordSchema = new mongoose.Schema({},{timestemps:true})

export const MedicalReports = mongoose.model( "MedicalRecord", medicalRecordSchema ) ;








