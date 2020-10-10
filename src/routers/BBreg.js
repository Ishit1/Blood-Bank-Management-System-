const express =require('express')
const router= new express.Router()
const BB= require('../models/bloodbank')

var obid="";

router.get('/regbloodbank', (req, res) => {
    res.render('regbloodbank.ejs')
})

router.post('/regbloodbank', (req, res) => {
    let newbb = new BB(req.body);
    newbb.save(function(err){
        if(err){
            console.log(err,'error')
            return
        }
       res.redirect('/')
    })
})
router.get('/login',(req,res)=>{
    res.render('login.ejs')
})
router.post('/login',async(req,res)=>{
    const found= await BB.findOne({email:req.body.email,password:req.body.pass})
    if(found){
        obid=found._id
        res.render('perpage.ejs',{data: found})
    }
})
router.post('/updateblood',(req,res)=>{
    console.log(req.body)
    BB.findById(obid,(err,user)=>{
        if(err){
            return err
        }
        if(req.body.Ap){
            user.Ap=true;
        }else{
            user.Ap=false;
        }
        if(req.body.An){
            user.An=true;
        }else{
            user.An=false;
        }
        if(req.body.Bp){
            user.Bp=true;
        }else{
            user.Bp=false;
        }
        if(req.body.Bn){
            user.Bn=true;
        }else{
            user.Bn=false;
        }
        if(req.body.ABp){
            user.ABp=true;
        }else{
            user.ABp=false;
        }
        if(req.body.ABn){
            user.ABn=true;
        }else{
            user.ABn=false;
        }
        if(req.body.Op){
            user.Op=true;
        }else{
            user.Op=false;
        }
        if(req.body.On){
            user.On=true;
        }else{
            user.On=false;
        }
        user.save()
    })
    res.redirect('/') 
})
module.exports= router