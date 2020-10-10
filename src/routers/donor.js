const express =require('express')
const router= new express.Router()
const Donor= require('../models/donor')

router.get('/regdonor', (req, res) => {
    res.render('regdonor.ejs')
})
router.post('/regdonor', function (req, res) {
    let newDonor = new Donor(req.body);
    newDonor.save(function(err){
        if(err){
            console.log(err,'error')
            return
        }
       res.redirect('/')
    })
})
module.exports= router