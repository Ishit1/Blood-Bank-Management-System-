const mongoose =require('mongoose')
const validator= require('validator')


const bloodbankSchema = new mongoose.Schema({
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
        required:true
    },
    address:{
        type: String,
        required:true
    },
    description:{
        type: String
    },
    licence:{
        type: String,
        unique: true,
        required: true
    },
   Ap:{
        type:Boolean,
        default: true
    },
    An:{
        type:Boolean,
        default: true
    },
    Bp:{
         type:Boolean,
         default: true
     },
     Bn:{
          type:Boolean,
          default: true
      },
      ABp:{
           type:Boolean,
           default: true
       },
       ABn:{
            type:Boolean,
            default: true
        },
        Op:{
             type:Boolean,
             default: true
         },
         On:{
              type:Boolean,
              default: true
          }
}) 

const bloodbank = mongoose.model('bloodbank', bloodbankSchema)
module.exports = bloodbank 