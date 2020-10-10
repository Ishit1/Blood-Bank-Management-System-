const mongoose =require('mongoose')
const validator= require('validator')


const donorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phno:{
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        select: false,
    },
    address:{
        type: String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    lastdate:{
        type:Date,
        required:true
    }
}) 

const donor = mongoose.model('Donor', donorSchema)
module.exports = donor 