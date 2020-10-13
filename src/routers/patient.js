const express =require('express')
const router= new express.Router()
const Donor= require('../models/donor')
const BB= require('../models/bloodbank')
const fast2sms = require('fast-two-sms')
require('dotenv').config() 
global.user={
    firstname:"",
    lastname:"",
    phno:"",
    email:"",
    bloodgroup:"",
    address:""
};
router.post('/result',async (req,res)=>{
    user=req.body;
    const match= await Donor.find({bloodgroup:req.body.bloodgroup})
    var match2=await BB.find({Ap:true});
    if(req.body.bloodgroup === "B+"){
        match2= await BB.find({Bp:true})
    }
    if(req.body.bloodgroup === "B-"){
        match2= await BB.find({Bn:true})
    }
    if(req.body.bloodgroup === "A-"){
        match2= await BB.find({An:true})
    }
    if(req.body.bloodgroup === "AB+"){
        match2= await BB.find({ABp:true})
    }
    if(req.body.bloodgroup === "AB-"){
        match2= await BB.find({ABn:true})
    }
    if(req.body.bloodgroup === "o-"){
        match2= await BB.find({On:true})
    }
    if(req.body.bloodgroup === "O+"){
        match2= await BB.find({Op:true})
    }
    res.render('result.ejs',{data:match,bbfound:match2})
})
router.post('/sendsms',(req,res)=>{
    console.log(req.body)
    fast2sms.sendMessage({authorization : process.env.SMS_KEY ,message : "\nHey "+ req.body.name+"\n"+user.firstname+" "+user.lastname+" is urgent need of "+user.bloodgroup+" blood type. \nWe think you can help them. We are providing their contact details below.\n"+user.phno+" "+user.email+" \n Be a hero. Save a life." ,numbers:[req.body.phno]})
    res.redirect(307,'/result')
})
module.exports= router